<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/26
 * Time: 0:47
 */

namespace app\api\controller\v1;


use app\api\service\UserToken;
use app\api\validate\TokenGet;


class Token
{
    public function getToken()
    {
        $code = input('param.code');

        //(new TokenGet())->goCheck();
        $ut = new UserToken($code);
        $data = $ut->get();
        //$data = [ 'token' => $token ];

        return json($data);

        //return [
        //    'token' => $token
        //];
    }

    public  function getCache(){
        return UserToken::getCurrentUid();
    }
}