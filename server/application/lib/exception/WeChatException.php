<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/26
 * Time: 22:59
 */

namespace app\lib\exception;


class WeChatException extends  BaseException
{
    public $code = '400';
    public $msg = 'failed to call WeChat service';
    public $errorCode = 999;
}