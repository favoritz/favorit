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
use app\api\validate\ProfileValidate;

class Profile
{
    public function updateProfile(){
        (new ProfileValidate())->goCheck();
        $uid = UserToken::getCurrentUid();
        $user =User::get(['id' => $uid]);

        $mobile = input('param.phone');
        $email = input('param.email');
        $wxid = input('param.wxid');

        if(!$user){
            throw new UserException();
        }

        if($mobile){
            $user->mobile = $mobile;
        }
        if($email){
            $user->email = $email;
        }
        if($wxid){
            $user->weId = $wxid;
        }

        $user->save();

        $user['phone'] = $user['mobile'];
        $user['wxid'] = $user['weId'];
        return $user;
    }
}