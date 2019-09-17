const feather = require('feather-icons');

(function () {
    'use strict';

    // Usage:
    // Comment page.

    window.app
        .component('comment', {
            template: require('./comment.html'),
            controller: _
        });

    _.$inject = ['$scope'];
    function _($scope) {
        var $ctrl = this;
        $ctrl.$onInit = () => {
            feather.replace();
        };
    }
})();