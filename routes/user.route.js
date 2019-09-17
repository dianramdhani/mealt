(function () {
    'use strict';

    window.app
        .config(RouteUser);

    RouteUser.$inject = ['$stateProvider'];

    function RouteUser($stateProvider) {
        [
            { name: 'user.dashboard', url: '/dashboard', component: 'dashboard' },
            { name: 'user.meal', url: '/meal', component: 'meal' },
            { name: 'user.comment', url: '/comment', component: 'comment' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();