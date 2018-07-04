<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/29
 * Time: 22:29
 */

namespace app\api\model;
use app\api\service\UserToken;
use app\lib\exception\PostException;
use app\lib\exception\UserException;
use think\Db;
use think\Model;

class Posts extends Model
{
    protected  $table = 'threads';
    public function replies(){
        return $this->hasMany('Replies','threadId','id');
    }

    public static function myPosts(){
        $uid = UserToken::getCurrentUid();
        $user = User::getProfileByID($uid);
        if(!$user){
            throw new UserException();
        }

        $posts = self::all(['userid'=>$uid]);
        if(!$posts ){
            $e = new PostException([
                'msg' => '当前用户无发布任何主题',
                'error_code' => 40006
            ]);
            throw $e;
        }

        return $posts;
    }

    public static function recent($count){
       $recent =  Db::table('threads')
            ->limit($count)
            ->select();

        if(!$recent){
            $e = new PostException([
                'msg' => '当前无主题',
                'error_code' => 40003
            ]);
            throw $e;
        }

       return $recent;
    }

    public static function getDetail($threadId){
        $detail = self::get($threadId);
        if(!$detail){
            $e = new PostException([
                'msg' => '本贴已被删除',
                'error_code' => 40001
            ]);
            throw $e;
        }
        return$detail;
    }
}