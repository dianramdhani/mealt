(function () {
    'use strict';

    // Usage:
    // Login view.

    window.app
        .component('login', {
            template: require('./login.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', '$rootScope', 'MainService'];
    function _($scope, $state, $rootScope, MainService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            if (typeof $rootScope.global.user !== 'undefined') {
                $state.go('user.dashboard');
            }
        };

        $scope.login = async () => {
            try {
                await MainService.login({
                    username: $scope.data.username,
                    password: $scope.data.password
                });
                $state.go('user.dashboard');
            } catch (error) {
                $scope.showError = true;
                $scope.$apply();
            }
        };
    }
})();