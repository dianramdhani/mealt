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
        const reloadData = () => {
            let elLoding = $compile('<drl-loading></drl-loading>')($scope);
            $element.prepend(elLoding);
            MealRestService.getAllMeal().then(({ data }) => {
                $scope.meals = data;
                $timeout(() => {
                    elLoding.remove();
                    feather.replace();
                });
            });
        };
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $timeout(() => {
                reloadData();
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