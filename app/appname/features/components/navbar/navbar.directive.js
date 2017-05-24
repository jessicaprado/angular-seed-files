angular
    .module('appname.component.navbar')
    .directive('navbar', Navbar);

function Navbar() {
    return {
        restrict: 'E',
        scope: {
            navbarData: '='
        },
        templateUrl: '/appname/features/components/navbar/navbar.html',
        controller: NavbarCtrl,
        controllerAs: 'NavbarVM',
        bindToController: true
    }
}

function NavbarCtrl() {
    var vm = this;

    vm.navbarButtons = [{
        title: 'Home',
        link: 'home'
    }, {
        title: 'About',
        link: 'about'
    }]
}