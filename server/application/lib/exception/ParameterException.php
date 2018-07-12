<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/1
 * Time: 19:17
 */

namespace app\lib\exception;


class ParameterException extends BaseException
{
    public $code = 400;
    public $msg = '参数异常';
    public $errorCode = 10002;
}