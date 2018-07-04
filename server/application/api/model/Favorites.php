<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/3
 * Time: 15:57
 */

namespace app\api\model;
use app\api\service\UserToken;
use app\lib\exception\PostException;
use app\lib\exception\UserException;
use think\Db;
use think\Model;

class Favorites extends Model
{
    protected $table = 'favorite';
    public static function getMyFavorites(){
        $uid = UserToken::getCurrentUid();
        $user = User::getProfileByID($uid);
        if(!$user){
            throw new UserException();
        }
        $favorites = Db::table('favorite')
            ->alias('f')
            ->where('f.user_id','=',$uid)
            ->join('threads','threads.id=f.thread_id')
            ->select();

        if(!$favorites){
            $e = new PostException([
                'msg' => '当前无收藏!',
                'error_code' => 40002
            ]);
            throw $e;
        }
        return $favorites;
    }
}