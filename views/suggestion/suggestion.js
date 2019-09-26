require('./suggestion.css');
const feather = require('feather-icons');

(function () {
    'use strict';

    // Usage:
    // Suggestion form.

    window.app
        .component('suggestion', {
            template: require('./suggestion.html'),
            controller: _
        });

    _.$inject = ['$scope', '$element', '$timeout'];
    function _($scope, $element, $timeout) {
        var $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.showAlert = false;
            $scope.mySuggestion = '';
            $timeout(() => feather.replace());
        };

        $scope.back = () => {
            $element.remove();
        };

        $scope.send = async () => {
            console.log($scope.mySuggestion);
            $scope.back();
        };
    }
})();