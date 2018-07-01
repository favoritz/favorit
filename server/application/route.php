<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
    use think\Route;

    //小程序中对应的url如: 'http://www.favorit.com/api/v1/login'
    //Route::rule('路由表达式','路由地址','请求类型','路由参数（数组）','变量规则（数组）');
    Route::post('api/v1/login', 'api/v1.Token/getToken','POST',['https'=>false]);

    //myposts和myreplies返回的token需要放在header里
    Route::get('api/v1/myposts', 'api/v1.Posts/myPosts','GET',['https'=>false]);
    Route::get('api/v1/myreplies', 'api/v1.Replies/myReplies','GET',['https'=>false]);

    //recent为路径传参
    Route::get('api/v1/recent/:count', 'api/v1.Posts/recent','GET',['https'=>false]);

