<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/26
 * Time: 22:02
 */
return [
        'app_id' => 'wxfe867cd4aa9363fb',
        'app_secret' => '6ae0e138814706c321932f13a25238dc',
        // 微信使用code换取用户openid及session_key的url地址
         'login_url' => "https://api.weixin.qq.com/sns/jscode2session?" .
        "appid=%s&secret=%s&js_code=%s&grant_type=authorization_code",

          // 微信获取access_token的url地址
          'access_token_url' => "https://api.weixin.qq.com/cgi-bin/token?" .
          "grant_type=client_credential&appid=%s&secret=%s",
];