(function () {
    'use strict';

    // Usage:
    // Dashboard view.

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['$scope', 'MealPlantRestService'];
    function _($scope, MealPlantRestService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            MealPlantRestService.getThisWeekMealPlan({ start: '2019-09-09', end: '2019-09-13' })
                .then(({ data }) => {
                    $scope.data = data;
                })
        };
    }
})();