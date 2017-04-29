angular
    .module('appname', [
        //global dependencies
        'ui.router',

        //features
        'appname.feature1',
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}