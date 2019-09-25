require('./dashboard.css');
const feather = require('feather-icons');

(function () {
    'use strict';

    // Usage:
    // Dashboard view.

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['$scope', '$timeout', '$log', '$state', '$element', '$compile', 'MealPlantRestService', 'UserReactionRestService'];
    function _($scope, $timeout, $log, $state, $element, $compile, MealPlantRestService, UserReactionRestService) {
        const reloadData = () => {
            const getDate = () => {
                let d = new Date(),
                    day = d.getDay(),
                    diff = d.getDate() - day + (day == 0 ? -6 : 1),
                    monday = new Date(d.setDate(diff)),
                    sunday = new Date(d.setDate(monday.getDate() + 6));

                return {
                    monday: monday.toISOString().substr(0, 10),
                    sunday: sunday.toISOString().substr(0, 10)
                }
            }

            let { monday, sunday } = getDate();

            MealPlantRestService.getThisWeekMealPlan({ start: monday, end: sunday }).then(({ data }) => {
                $scope.breakfasts = data.map(_ => _.filter(__ => __.plan.period === 1));
                $scope.lunches = data.map(_ => _.filter(__ => __.plan.period === 2));
                $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

                $timeout(() => {
                    feather.replace();
                });
            });
        };

        let $ctrl = this;
        $ctrl.$onInit = () => {
            reloadData();
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

        $scope.comment = (meal) => {
            $scope.meal = meal;
            $element.prepend($compile(`<comment-absolute meal="meal"></comment-absolute>`)($scope));
        };
    }
})();