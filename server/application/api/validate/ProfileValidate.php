<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/7
 * Time: 22:49
 */

namespace app\api\validate;

class ProfileValidate extends  BaseValidate
{
    protected $rule = [
        'email'=> 'email',
        'phone' => 'number'
    ];

    protected $message = [
        'email' => '邮箱格式错误',
        'phone'     => '手机号格式不正确'
    ];
}