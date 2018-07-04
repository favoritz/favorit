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
        $replies = Db::table('reply')
            ->alias('r')
            ->where('r.userId','=',$uid)
            ->join('threads','threads.id=r.threadId')
            ->group('threadId')
            ->select();
        if(!$replies){
            $e = new PostException([
                'msg' => '当前用户无回复任何主题',
                'error_code' => 40008
            ]);
            throw $e;
        }
        return $replies;
    }
}