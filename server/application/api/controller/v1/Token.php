<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/26
 * Time: 0:47
 */

namespace app\api\controller\v1;
use app\api\service\UserToken;


class Token
{
    public function getToken()
    {
        //(new TokenGet())->goCheck();
        $code = input('param.code');
        $ut = new UserToken($code);
        $data = $ut->get();
        return json($data);
    }
}