<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/3
 * Time: 15:57
 */

namespace app\api\model;
use app\api\service\UserToken;
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
        return $favorites;
    }
}