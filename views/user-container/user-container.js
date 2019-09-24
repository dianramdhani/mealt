require('./user-container.css');
const feather = require('feather-icons');

(function () {
    'use strict';

    // Usage:
    // User container.

    window.app
        .component('userContainer', {
            template: require('./user-container.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', 'MainService'];
    function _($scope, $state, MainService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.menu = 'dashboard';
            feather.replace();

            $scope.$watch(() => $state.current.component, (current) => {
                $scope.menu = current;
            });
        };

        $scope.logout = () => {
            MainService.logout();
            $state.go('login');
        };
    }
})();