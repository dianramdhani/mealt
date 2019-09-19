(function () {
    'use strict';

    window.app
        .config(RouteUser);

    RouteUser.$inject = ['$stateProvider'];

    function RouteUser($stateProvider) {
        [
            { name: 'user.dashboard', url: '/dashboard', component: 'dashboard' },
            { name: 'user.meal', url: '/meal', component: 'meal' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();