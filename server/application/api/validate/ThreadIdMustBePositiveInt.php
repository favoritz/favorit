<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/8
 * Time: 0:44
 */

namespace app\api\validate;


class ThreadIdMustBePositiveInt extends BaseValidate
{
    protected $rule =[
        'threadid' => 'require|isPositiveInteger',
    ];

    protected $message = [
        'threadid' => '帖子编号需为正整数'
    ];
}