<?php
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
    use think\Route;

    //小程序中对应的url如: 'http://www.favorit.com/api/v1/login'
    //Route::rule('路由表达式','路由地址','请求类型','路由参数（数组）','变量规则（数组）');
    Route::post('api/:version/login', 'api/:version.Token/getToken',['https'=>false]);

    //myposts,myreplies,myfavorite,updateinfo返回的token需要放在header内
    Route::get('api/:version/myposts', 'api/:version.Posts/myPosts',['https'=>false]);
    Route::get('api/:version/myreplies', 'api/:version.Replies/myReplies',['https'=>false]);
    Route::post('api/:version/updateinfo', 'api/:version.Profile/updateProfile',['https'=>false]);
    Route::get('api/:version/myfavorites', 'api/:version.Posts/myFavorites',['https'=>false]);

    //recent为路径传参
    Route::get('api/:version/recent/:count/:page', 'api/:version.Posts/recent',['https'=>false]);
    Route::get('api/:version/postdetail/:threadid', 'api/:version.Posts/postDetail',['https'=>false]);

    Route::get('api/:version/add', 'api/:version.Posts/addPost',['https'=>false]);

    Route::get('api/:version/announcement', 'api/:version.Posts/announcements',['https'=>false]);

    Route::get('api/:version/carousel', 'api/:version.Posts/carousel',['https'=>false]);

    Route::get('api/:version/test', 'api/:version.Test/test',['https'=>false]);

    Route::get('api/:version/filter/:selectedtype/:selectedsorting/:selectedLocations', 'api/:version.Posts/filter',['https'=>false]);
    Route::post('api/:version/filter', 'api/:version.Posts/filter',['https'=>false]);

    Route::get('api', 'api/Apilist/api',['https'=>false]);

