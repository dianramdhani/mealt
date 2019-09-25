(function () {
    'use strict';

    window.app
        .config(RouteApp);

    RouteApp.$inject = ['$stateProvider'];

    function RouteApp($stateProvider) {
        [
            { name: 'login', url: '/login', component: 'login' },
            { name: 'user', url: '/user', component: 'userContainer' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();