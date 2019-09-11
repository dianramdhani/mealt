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
        $ctrl.$onInit = () => { };

        $scope.logout = () => {
            MainService.logout();
            $state.go('login');
        };
    }
})();