<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/25
 * Time: 17:46
 */

namespace app\api\validate;


use app\lib\exception\ParameterException;
use think\Request;
use think\Validate;

class BaseValidate extends Validate
{
    public function goCheck(){
        $request = Request::instance();
        $params = $request->param();

        $result = $this->batch()->check($params);
        if(!$result){
            $error = new ParameterException([
                'msg' => $this->error,
            ]);
            throw $error;
        }
        else{
            return true;
        }
    }

    protected function isPositiveInteger($value , $rule = '',$data = '',$field = ''){
        if (is_numeric($value) && is_int($value + 0) && ($value + 0) > 0) {
            return true;
        }
        else{
            return false;//$field.'必须是正整数';
        }
    }

    protected function isNotEmpty($value,$rule='',$data='',$field=''){
        if (empty($value)) {
            return false;
        }
        else{
            return true;
        }
    }
}