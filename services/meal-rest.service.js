(function () {
    'use strict';

    window.app
        .service('MealRestService', MealRestService);

    MealRestService.$inject = ['$http', 'CONFIG'];
    function MealRestService($http, CONFIG) {
        this.getAllMeal = getAllMeal;

        const url = CONFIG.API;

        function getAllMeal() {
            return $http.get(`${url}/meal`);
        }
    }
})();