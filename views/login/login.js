(function () {
    'use strict';

    // Usage:
    // Login view.

    window.app
        .component('login', {
            template: require('./login.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', 'MainService'];
    function _($scope, $state, MainService) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.login = async () => {
            try {
                await MainService.login({
                    username: $scope.data.username,
                    password: $scope.data.password
                });
                $state.go('user.dashboard');
            } catch (error) {
                $scope.res = error;
                $scope.$apply();
            }
        };
    }
})();