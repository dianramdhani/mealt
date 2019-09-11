(function () {
    'use strict';

    // Usage:
    // Login view.

    window.app
        .component('login', {
            template: require('./login.html'),
            controller: _
        });

    _.$inject = ['$scope', 'MainService'];
    function _($scope, MainService) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.login = async () => {
            $scope.res = await MainService.login({
                username: $scope.data.username,
                password: $scope.data.password
            });
            $scope.$apply();
        };
    }
})();