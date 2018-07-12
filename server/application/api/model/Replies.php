<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/30
 * Time: 7:38
 */

namespace app\api\model;
use app\lib\exception\PostException;
use think\Model;

class Replies extends Model
{
    protected $table = 'reply';
    public static function getMyReplies($uid){
        $replies = self::alias('r')
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

    public static function getReplies(){
        $threadid = input('param.threadid');
        $replies = self::all(['threadId'=>$threadid]);
        return $replies;
    }
}