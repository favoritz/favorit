<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/29
 * Time: 15:34
 */

namespace app\api\controller\v1;

use app\api\model\Favorites;
use app\api\model\Posts as PostModel;
use app\lib\exception\PostException;

class Posts
{

    public function myPosts(){
        $posts = PostModel::myPosts();
        return $posts;
    }

    public function recent(){
        $count = input('param.count');
        $recent = PostModel::recent($count);
        return $recent;
    }

    public function myFavorites(){
        $favorites = Favorites::getMyFavorites();
        return $favorites;
    }

    public function postDetail(){
        $threadid = input('param.threadid');
        $detail = PostModel::get($threadid);
        if(!$detail){
            throw new PostException();
        }
        return $detail;
    }

}