<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/8
 * Time: 0:49
 */

namespace app\api\validate;


class CountPageMustBePositiveInt extends BaseValidate
{
    protected $rule = [
        'count' => 'require|isPositiveInteger',
        'page' => 'require|isPositiveInteger'
        ];

    protected $message = [
        'count' => '每页数目需为正整数',
        'page' => '页数需为正整数'
    ];
}