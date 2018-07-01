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
use app\api\service\UserToken;
use app\lib\exception\UserException;

class Replies
{
    /**
     * @return
     * @throws UserException
     * 根据Token来获取uid
     * 根据uid来查找用户数据，判断用户是否存在，如果不存在抛出异常
     */
    public function myReplies(){
        $uid = User::getUserIDFromCache();
        $replies = RepliesModel::getMyReplies($uid);
        return $replies;
    }
}