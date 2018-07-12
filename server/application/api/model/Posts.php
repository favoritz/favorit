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
use think\Model;

class Posts extends Model
{
    protected  $table = 'threads';
    protected static $postFields = 'id,location,price,priority,title,created_at as create_at,pics as imgsrc,view_count as visit_count';
    public function carousel(){
        return $this->hasMany('Carousel','threadId','id');
    }

    public static function myPosts(){
        $uid = UserToken::getCurrentUid();
        $user = User::getProfileByID($uid);
        if(!$user){
            throw new UserException();
        }

        $posts = self::field(self::$postFields)
                 ->where('userid','eq',$uid)
                 ->select();
        if(!$posts ){
            $e = new PostException([
                'msg' => '当前用户无发布任何主题',
                'error_code' => 40006
            ]);
            throw $e;
        }

        return $posts;
    }

    public static function recent(){
        $count = input('param.count');
        $page = input('param.page');
       $recent = self:: where('category','neq','666')->where('category','neq','888')
                 ->field(self::$postFields)->limit($count)->page($page)->select();

        if(!$recent){
            $e = new PostException([
                'msg' => '当前无主题',
                'error_code' => 40003
            ]);
            throw $e;
        }

       return $recent;
    }

    public static function getDetail(){
        $threadId = input('param.threadid');
        $detail = self::get(['id '=> $threadId])->field(self::$postFields)->find();

        if(!$detail){
            $e = new PostException([
                'msg' => '该贴不存在',
                'error_code' => 40001
            ]);
            throw $e;
        }
        return $detail;
    }


    public static function getPostList(){
        $type = input('param.selectedtype');
        $sort = input('param.selectedsorting');
        $locs= input('param.selectedLocations');
        $locations = explode(",",$locs);
        $post = new Posts();
        $sql = '';
        $i = 0 ;
        foreach ($locations as $location){
            if($i == 0){
                $sql = $sql.'(location = '.$location;
            }
            else{
                $sql = $sql.' OR location = '.$location;
            }
            $i++;
        }
        $sql = $sql.') and category ='.$type;
        return $post->applySort ($sort)->field(self::$postFields)->where($sql)
            ->where('category','neq','666')->where('category','neq','888')
            ->select();
    }

    protected function applyType($type){
        return $this->where('category',$type);//发布时间从新到旧

    }

    protected function applySort($sort)
    {
        switch ($sort) {
            case '1':
                return $this->sortRecent();//发布时间从新到旧
                break;
            case '2':
                return $this->sortPriceLowToHigh();//按价格从低到高
                break;
            case '3':
                return $this->sortPriceHighToLow();//按价格从高到低
                break;
            default:
                return $this->sortRecent();//默认发布时间从新到旧
                break;
        }
    }

    protected function sortRecent(){
        return $this->order('created_at', 'desc');
    }

    protected function sortPriceLowToHigh(){
        return $this->order('price', 'asc');
    }

    protected function sortPriceHighToLow(){
        return $this->order('price', 'desc');
    }



}