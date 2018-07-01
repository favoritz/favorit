<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/25
 * Time: 17:46
 */

namespace app\api\validate;


use think\Exception;
use think\Request;
use think\Validate;

class BaseValidate extends Validate
{
    public function goCheck()
    {
        $request = Request::instance();
        $params = $request->param();

        $result = $this->check($params);
        if(!$result){
            $error = $this->error;
            throw new Exception($error);
        }
        else{
            return true;
        }
    }

    protected function isNotEmpty($value,$rule='',$data='',$field='')
    {
        if (empty($value)) {
            return false;
        }
        else{
            return true;
        }
    }
}