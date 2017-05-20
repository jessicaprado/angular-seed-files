angular
    .module('appname.feature1')
    .config(featureConfig);

function featureConfig($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: '/appname/features/feature1/feature.html',
        controller: 'FeatureCtrl',
        controllerAs: 'FeatureVM'
    })
}