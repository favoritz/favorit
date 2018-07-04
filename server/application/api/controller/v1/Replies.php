<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/7/1
 * Time: 9:41
 */

namespace app\api\controller\v1;
use app\api\model\Replies as RepliesModel;
use app\api\model\User;
use app\lib\exception\UserException;

class Replies
{
    public function myReplies(){
        $uid = User::getUserIDFromCache();
        $replies = RepliesModel::getMyReplies($uid);
        return $replies;
    }
}