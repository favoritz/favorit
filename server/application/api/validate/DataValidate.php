<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/25
 * Time: 8:21
 */

namespace app\api\validate;
use think\Validate;

class DataValidate extends Validate
{
    protected $rule = [
       'name' => 'require|max:10',
        'email' => 'email'
    ];
}