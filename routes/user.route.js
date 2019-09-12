(function () {
    'use strict';

    window.app
        .config(RouteUser);

    RouteUser.$inject = ['$stateProvider'];

    function RouteUser($stateProvider) {
        [
            { name: 'user.dashboard', url: '/dashboard', component: 'dashboard' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();