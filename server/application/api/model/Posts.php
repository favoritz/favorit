<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/29
 * Time: 22:29
 */

namespace app\api\model;
use think\Db;
use think\Model;

class Posts extends Model
{
    protected  $table = 'threads';
    public function replies(){
        return $this->hasMany('Replies','threadId','id');
    }

    public static function myPosts($uid){
        return self::all(['userid'=>$uid]);
    }

    public static function recent($count){
       $recent =  Db::table('threads')
            ->limit($count)
            ->select();
       return $recent;
    }



}