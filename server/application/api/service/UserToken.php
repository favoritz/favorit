<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/26
 * Time: 8:14
 */

namespace app\api\service;
use app\api\model\User;
use app\lib\exception\TokenException;
use app\lib\exception\WeChatException;
use think\Cache;
use think\Db;
use think\Request;


class UserToken extends Token
{
    protected  $code;
    protected  $wxAppID;
    protected  $wxAppSecret;
    protected  $wxLoginUrl;

    /**
     * UserToken constructor.
     * @param $code
     * 读取微信配置，application/extra/wx.php
     */
    function __construct($code)
    {
        $this->code = $code;
        $this->wxAppID = config('wx.app_id');
        $this->wxAppSecret  = config('wx.app_secret');
        $this->wxLoginUrl = sprintf(config('wx.login_url'),
                $this->wxAppID,$this->wxAppSecret,$this->code);
    }

    /**
     * @return string
     * @throws TokenException
     * @throws WeChatException
     * login取参，产生token
     */
    public function  get(){
        $result = curl_get($this->wxLoginUrl);
        $wxResult = json_decode($result, true); //true为数组
        if(empty($wxResult)){   //异常将记录在日志
            throw new Exception("getting session_key ann openID error,error from wechat");
            //return null;
        }
        else{
            $loginFail = array_key_exists('errcode',$wxResult);
            if($loginFail){
                $this->processLoginError($wxResult);
            }
            else{
                return $this->grantToken($wxResult);
            }
        }

    }

    /**
     * @param $wxResult
     * @return string
     * @throws TokenException
     * 到openid
     *生产令牌，，写入缓存
     *把令牌返回到客户端去
     *key:令牌
     *value:wxResult,uid,scope(权限范围)
     */
    private function  grantToken($wxResult){

        $openid = $wxResult['openid'];
        $user = User::getProfileByOpenID($openid);
        if($user){
           $uid = $user['id'];
        }

        $cachedValue = $this->prepareCachedValue($wxResult,$uid);
        $token = $this->saveToCache($cachedValue);

        $data = [
            'sessionid' => $token,
            'userinfo' => $user,
        ];
        return $data;
    }

    /**
     * @param $cachedValue
     * @return string
     * @throws TokenException
     * 写入缓存
     */
    private function saveToCache($cachedValue){
        $key = Token::generateToken();
        $value = json_encode($cachedValue);
        $expire_in = config('setting.token_expire_in');
        $request = cache($key,$value,$expire_in);

        if(!$request){
            throw new TokenException([
                'msg' => '服务器缓存异常',
                'errorCode' => 10005
            ]);
        }
        return $key;
    }

    /**
     * @param $wxResult
     * @param $uid
     * @return mixed
     * 准备缓存
     */
    private function prepareCachedValue($wxResult, $uid){
        $cachedValue = $wxResult;
        $cachedValue['uid'] = $uid;
        $cachedValue['scope'] = 16;  //用户权限
        return $cachedValue;
    }
    /**
     * @param $openid
     * @return mixed
     * 创建新用户
     */
    public static function newUser($openid)
    {
       $user = User::create([
            'openId' => $openid
        ]);
        return $user["id"];
    }

    private function processLoginError($wxResult){
        throw new WeChatException(
        [
            'msg' => $wxResult['errcode'],
            'errorCode' => $wxResult['errcode']
        ]);
    }


    public static function getCurrentTokenVar($key){
        $token = Request::instance()->header('token');
        $vars = Cache::get($token);

        if(!$vars){
            throw  new TokenException();
        }
        else {
            if (!is_array($vars)) {
                $vars = json_decode($vars, true);
            }
            if(array_key_exists($key,$vars)){
                return $vars[$key];
            }
            else{
                throw new Exception('尝试获取的Token变量不存在');
            }
        }
    }
    public static function getCurrentUid(){
        $uid =self::getCurrentTokenVar('uid');
        return $uid;
    }
}