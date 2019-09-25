require('./meal.css');
const feather = require('feather-icons');

(function () {
    'use strict';

    // Usage:
    // Meal view.

    window.app
        .component('meal', {
            template: require('./meal.html'),
            controller: _
        });

    _.$inject = ['$scope', '$timeout', '$element', '$compile', 'MealRestService'];
    function _($scope, $timeout, $element, $compile, MealRestService) {
        let $ctrl = this;
        $ctrl.$onInit = async () => {
            $scope.meals = false;
            $scope.meals = await MealRestService.getAllMeal().then(_ => _.data);
            $scope.$apply();
            $timeout(() => {
                feather.replace();
            });

            $scope.$watch('search', () => {
                $timeout(() => {
                    feather.replace();
                }, 500);
            });
        };

        $scope.comment = (meal) => {
            $scope.meal = meal;
            $element.prepend($compile(`<comment-absolute meal="meal"></comment-absolute>`)($scope));
        };
    }
})();