angular
    .module('appname.home')
    .config(featureConfig);

function featureConfig($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: '/appname/features/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'HomeVM'
    })
}