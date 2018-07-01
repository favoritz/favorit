<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/27
 * Time: 19:00
 */

namespace app\api\service;


class Token
{
    /**
     *Token三组字符串MD5加密
     * 32个字符的随机字符串
     * 时间戳字符串
     * salt 字符串
     */
    public static function generateToken(){
        $randChars = getRandChar(32);
        $timestamp = $_SERVER['REQUEST_TIME_FLOAT'];
        $salt = config('secure.token_salt');
        return md5($randChars.$timestamp.$salt);
    }


}