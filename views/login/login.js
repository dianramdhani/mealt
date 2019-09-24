(function () {
    'use strict';

    // Usage:
    // Login view.

    window.app
        .component('login', {
            template: require('./login.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', '$element', 'MainService'];
    function _($scope, $state, $element, MainService) {
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
                $scope.showError = true;
                $scope.$apply();
            }
        };
    }
})();