(function () {
    'use strict';

    // Usage:
    // Login view.

    window.app
        .component('login', {
            template: '<h1>hallo bos</h1>',
            controller: ControllerController
        });

    ControllerController.$inject = [];
    function ControllerController() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();