<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/30
 * Time: 7:38
 */

namespace app\api\model;


use think\Db;
use think\Model;

class Replies extends Model
{
    protected $table = 'reply';
    public static function getMyReplies($uid){
        $user = Db::table('reply')
            ->alias('r')
            ->where('r.userId','=',$uid)
            ->join('threads','threads.id=r.threadId')
            ->group('threadId')
            ->select();
        return $user;
    }
}