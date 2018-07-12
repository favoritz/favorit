<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/25
 * Time: 23:52
 */

namespace app\lib\exception;


class LoginUserException extends BaseException
{
    public $code = '400';
    public $msg = 'user does\'n exist';
    public $errorCode = 40000;
}