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

// SERVICES
require('./services/main.service');

// VIEWS
require('./views/login/login');

// RUN
(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$state'];
    function Run($state) {
        console.log('testing');
        $state.go('login');
    }
})();