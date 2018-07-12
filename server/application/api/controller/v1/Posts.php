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
use app\api\model\Replies;
use app\api\validate\CountPageMustBePositiveInt;
use app\api\validate\ThreadIdMustBePositiveInt;

class Posts
{
    public function replies(){
        return $this->hasMany('Replies','threadId','id');
    }

    public function carousel(){
        $carousel = PostModel::all(['category' => '888'],'carousel');
        return $carousel;
    }

    public function announcements(){
        $announcements = PostModel::where('category','=','666')->select();
        return $announcements;
    }

    public function myPosts(){
        $posts = PostModel::myPosts();
        return $posts;
    }

    public function recent(){
        (new CountPageMustBePositiveInt())->goCheck();
        $recent = PostModel::recent();
        return $recent;
    }

    public function myFavorites(){
        $favorites = Favorites::getMyFavorites();
        return $favorites;
    }

    public function postDetail(){
        (new ThreadIdMustBePositiveInt())->goCheck();
        $detail = PostModel::getDetail();
        $detail['repilies'] = Replies::getReplies();
        return $detail;
    }

    /*
    public function addPost(){
        $post = new PostModel([
            'title' => 'testAdd',
            'author' => 'abin',
            'userid' => 1,
            'content' => 'testContent'
        ]);
        $post->save();

    }*/

    public function filter(){
        return PostModel::getPostList();
    }

}