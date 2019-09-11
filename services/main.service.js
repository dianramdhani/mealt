(function () {
    'use strict';

    window.app
        .service('MainService', MainService);

    MainService.$inject = ['$http', 'CONFIG'];
    function MainService($http, CONFIG) {
        this.login = login;

        const url = CONFIG.API;

        /**
         * Login service.
         * @param {String} username - Username.
         * @param {String} password - Username.
         */
        function login({ username, password }) {
            return $http.post(`${url}/login`, { username, password });
        }
    }
})();