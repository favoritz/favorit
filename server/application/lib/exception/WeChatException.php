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
    public $msg = '微信数据获取失败';
    public $errorCode = 50000;
}