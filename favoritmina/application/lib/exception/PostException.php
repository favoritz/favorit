<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/29
 * Time: 23:13
 */

namespace app\lib\exception;


class PostException extends BaseException
{
    public $code = 404;
    public $msg = '请求的帖子不存在';
    public $errorCode = 40000;
}