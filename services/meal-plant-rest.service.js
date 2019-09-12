(function () {
    'use strict';

    window.app
        .service('MealPlantRestService', MealPlantRestService);

    MealPlantRestService.$inject = ['$http', 'CONFIG'];
    function MealPlantRestService($http, CONFIG) {
        this.getThisWeekMealPlan = getThisWeekMealPlan;

        const url = CONFIG.API;

        /**
         * Get plan in week.
         * @param {String} start - Monday in week.
         * @param {String} end - Sunday in week.
         */
        function getThisWeekMealPlan({ start, end }) {
            return $http.get(`${url}/mealPlan`, { params: { start, end } });
        }
    }
})();