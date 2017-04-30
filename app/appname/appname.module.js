angular
    .module('appname', [
        //global dependencies
        'ui.router',

        //features
        'appname.home',
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}