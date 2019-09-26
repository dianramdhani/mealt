(function () {
    'use strict';

    window.app
        .service('SuggestionRestService', SuggestionRestService);

    SuggestionRestService.$inject = ['$http', 'CONFIG'];
    function SuggestionRestService($http, CONFIG) {
        this.createSuggestion = createSuggestion;

        const url = CONFIG.API;

        function createSuggestion(suggestion) {
            return $http.post(`${url}/suggestion`, {}, { params: { suggestion } });
        }
    }
})();