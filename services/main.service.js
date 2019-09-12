(function () {
    'use strict';

    window.app
        .service('MainService', MainService);

    MainService.$inject = ['$http', '$rootScope', '$cookies', 'CONFIG'];
    function MainService($http, $rootScope, $cookies, CONFIG) {
        this.login = login;
        this.logout = logout;

        const url = CONFIG.API;

        /**
         * Login service.
         * @param {String} username - Username.
         * @param {String} password - Username.
         */
        async function login({ username, password }) {
            $rootScope.global['user'] = await $http.post(`${url}/login`, { username, password }).then(_=>_.data);
            $http.defaults.headers.common = { token: $rootScope.global.user.token };
            let expires = new Date();
            expires.setDate(expires.getDate() + 7);
            $cookies.putObject('user', $rootScope.global.user, { expires });
            return $rootScope.global.user;
        }

        function logout() {
            $http.defaults.headers.common = {};
            $rootScope.global = {};
            $cookies.remove('user');
            // $cookies.remove('menu');
        }
    }
})();