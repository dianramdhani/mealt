require('./meal.css');
const feather = require('feather-icons');

(function () {
    'use strict';

    // Usage:
    // Meal view.

    window.app
        .component('meal', {
            template: require('./meal.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            feather.replace();
        };
    }
})();