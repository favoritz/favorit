<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/3
 * Time: 12:03
 */

namespace app\api\controller\v1;


use app\api\model\User;
use app\api\service\UserToken;
use think\Request;

class Profile
{
    public function updateProfile(){
        $uid = UserToken::getCurrentUid();
        $user =User::get($uid);

        //$mobile = Request::instance()->param('phone');//
        //$email = Request::instance()->param('email');//
        $mobile = input('param.phone');
        $email = input('param.email');
        $wxid = input('param.wxid');

        if(!$user){
            throw new UserException();
        }
        $user->mobile     = $mobile;
        $user->email    = $email;
        $user->weId = $wxid;
        $user->save();
        $user['phone'] = $user['mobile'];
        $user['wxid'] = $user['weId'];
        return $user;
    }
}