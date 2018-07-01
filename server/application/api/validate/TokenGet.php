<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/26
 * Time: 0:50
 */

namespace app\api\validate;


use app\api\validate\BaseValidate;

class TokenGet extends BaseValidate
{
    protected $rule = [
        'code'=> 'require|isNotEmpty '
    ];

    protected  $message = [
        'code'=> 'code is empty'
    ];
}