angular
    .module('appname.home')
    .config(HomeConfig);

function HomeConfig($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: '/appname/features/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'HomeVM'
    })
}