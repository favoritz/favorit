<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/25
 * Time: 23:06
 */

namespace app\lib\exception;


use think\Exception;

class BaseException extends Exception
{
    //HTTP状态码    404,200
    public $code = 400;

    //错误具体信息
    public $msg = '参数错误';

    //自定义的错误码
    public $errorCode = 10000;
}