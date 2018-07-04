<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/26
 * Time: 8:12
 */

namespace app\api\model;
use app\api\service\UserToken;
use app\lib\exception\UserException;
use think\Db;
use think\Model;

class User extends  Model
{
    protected  $table = 'users';

    public static function getProfileByOpenID($openid)
    {
        $id = User::getIDbyOpenID($openid);
        return User::getProfileByID($id);
    }

    /**
     * @param $openid
     */
    public static function getIDbyOpenID($openid)
    {
        $user = User::where('openid','=',$openid)->find();
        if($user){
            $uid = $user["id"];
        }
        else
            $uid = UserToken::newUser($openid);  //创建新用户
        return $uid;
    }

    public static function getProfileByID($id){
        $todosql = Db::table('threads')                 //取todocount
                ->where('status','=','0')
                ->field('userid , count(id) as todocount')
                ->group('userid')
                ->buildSql();

        $donesql = Db::table('threads')                //取donecount
                ->where('status','=','1')
                ->field('userid , count(id) as donecount')
                ->group('userid')
                ->buildSql();

        $user = Db::table('users')->field('id,nickName username,weId as wxid,mobile as phone,email,todocount,donecount')
                ->alias('u')
                ->where('u.id','=',$id)
                ->join([$todosql=>'todo'],'todo.userid=u.id','left')
                ->join([$donesql=>'done'],'done.userid=u.id','left')
                ->find();


        if(!$user['donecount']){   //值为null时置为0
            $user['donecount']='0';
        }
        if(!$user['todocount']){  //值null时置为0
            $user['todocount']='0';
        }
        $user['mobile'] = $user['phone'];
        return $user;
    }

    public static function getUserIDFromCache(){
        $uid = UserToken::getCurrentUid();
        $user = self::getProfileByID($uid);
        if(!$user){
            throw new UserException();
        }
        return $uid;
    }

}