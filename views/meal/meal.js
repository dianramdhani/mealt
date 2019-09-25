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

    _.$inject = ['$scope', '$timeout', '$element', '$compile', 'MealRestService', 'UserReactionRestService'];
    function _($scope, $timeout, $element, $compile, MealRestService, UserReactionRestService) {
        const reloadData = async () => {
            $scope.meals = false;
            $scope.meals = await MealRestService.getAllMeal().then(_ => _.data);
            $scope.$apply();
            $timeout(() => {
                feather.replace();
            });
        };
        let $ctrl = this;
        $ctrl.$onInit = () => {
            reloadData();
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

        $scope.like = async (mealId) => {
            await UserReactionRestService.like(mealId);
            reloadData();
        };

        $scope.dislike = async (mealId) => {
            await UserReactionRestService.dislike(mealId);
            reloadData();
        };

        $scope.bored = async (mealId) => {
            await UserReactionRestService.bored(mealId);
            reloadData();
        };
    }
})();