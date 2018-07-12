<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/7
 * Time: 17:48
 */

namespace app\api\controller\v1;

use app\api\model\Api AS ApiModel;
class Api
{
    public function getApi(){
        $api = ApiModel::all();
        return $api;

    }
}