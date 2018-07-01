<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/29
 * Time: 15:34
 */

namespace app\api\controller\v1;

use app\api\model\Posts as PostModel;
use app\api\model\User;
use app\api\service\UserToken;
use app\lib\exception\PostException;
use app\lib\exception\UserException;

class Posts
{
    private function getPostAndRepliesByID(){
        $id = input('param.id');
        $post = PostModel::with('replies')->find($id);
    }
    public function getPostByID(){
        $id = input('param.id');
        $post = PostModel::get($id);

        if(!$post){
            throw  new PostException();
        }
        return $post;
    }

    /**
     * @return PostModel[]|false
     * @throws UserException
     * 根据Token来获取uid
     *根据uid来查找用户数据，判断用户是否存在，如果不存在抛出异常
     */
    public function myPosts(){
        $uid = UserToken::getCurrentUid();
        $user = User::getProfileByID($uid);
        if(!$user){
            throw new UserException();
        }
        $posts = PostModel::myPosts($uid);
        return $posts;
    }

    public function recent(){
        $count = input('param.count');
        $recent = PostModel::recent($count);
        return $recent;
    }


}