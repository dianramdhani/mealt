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

    _.$inject = ['$scope', '$timeout', 'MealPlantRestService'];
    function _($scope, $timeout, MealPlantRestService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            const getMondaySunday = () => {
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

            MealPlantRestService.getThisWeekMealPlan({ start: '2019-08-26', end: '2019-09-02' }).then(({ data }) => {
                $scope.breakfasts = data.plans.map(_ => _.filter(__ => __.plan.period === 1));
                $scope.lunches = data.plans.map(_ => _.filter(__ => __.plan.period === 2));
                $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
                console.log($scope.breakfasts, $scope.lunches);

                $timeout(() => {
                    feather.replace();
                });
            });
        };
    }
})();