// LIBS
require('./node_modules/jquery/dist/jquery');
require('./node_modules/popper.js/dist/umd/popper');
require('./node_modules/bootstrap/dist/js/bootstrap');
require('./node_modules/angular/angular');
require('./node_modules/angular-ui-router/release/angular-ui-router');
require('./node_modules/angular-cookies/angular-cookies');

// ANGULARJS
window.app = angular.module('Mealt', ['ui.router', 'ngCookies']);

// CONFIG
require('./config');

// ROUTES
require('./routes/app.route');
require('./routes/user.route');

// SERVICES
require('./services/main.service');
require('./services/meal-plant-rest.service');
require('./services/user-reaction-rest.service');

// DIRECTIVES
require('./directives/tr-repeat-end.directive');
require('./directives/tr-image-changer.directive');

// VIEWS
require('./views/login/login');
require('./views/user-container/user-container');
require('./views/dashboard/dashboard');
require('./views/meal/meal');
require('./views/comment/comment');

// RUN
(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$state', '$rootScope', '$cookies', '$http'];
    function Run($state, $rootScope, $cookies, $http) {
        $rootScope['global'] = {
            user: angular.fromJson($cookies.get('user')),
            menu: angular.fromJson($cookies.get('menu'))
        } || {};

        if (typeof $rootScope.global.user === 'undefined') {
            $state.go('login');
        } else {
            $http.defaults.headers.common = { token: $rootScope.global.user.token };
            /**
             * @todo
             * tidak selalu user
             * compare with role
             */
            $state.go('user');
        }
    }
})();