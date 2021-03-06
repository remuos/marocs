<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-frontend',
        ],
         'Api' => [
 
            'class' => 'frontend\components\ApiController',
 
            ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-frontend',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
                [
                    'class' => 'yii\log\EmailTarget',
                    'levels' => ['error'],
                    'categories' => ['yii\db\*'],
                    'message' => [
                       'from' => ['remuosoumer@gmail.com'],
                       'to' => ['soumer120@gmail.com'],
                       'subject' => 'Database errors at example.com',
                    ],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        
        'urlManager' => [

            'enablePrettyUrl' => true,
            'suffix' => '.html',
            
            //'showScriptName' => false,
            'rules' => [
                 [
                    'pattern' => 'article/<id:\d+>',
                    'route' => 'article/view',
                ],
                [
                    'pattern' => 'article/page/<page:\d+>',
                    'route' => 'article/index',
                ],
                [
                    'pattern' => 'article/<cat>/<page:\d+>',
                    //'pattern' => 'article/<cat>',
                    'route' => 'article/articles-by-categorie',
                    //'defaults' => ['page' => 1],
                ],
            ],
        ],
        
    ],
    'params' => $params,
];
