<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/7
 * Time: 18:16
 */

namespace app\api\controller;


use think\Controller;
use app\api\model\Api as ApiModel;
class Apilist extends Controller
{
    public function api(){
        $api = ApiModel::all();
        $this->assign('api',$api);
        $this->fetch();
        return view();
    }
}