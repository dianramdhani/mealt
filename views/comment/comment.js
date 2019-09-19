require('./comment.css');
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

    _.$inject = ['$scope', '$stateParams', 'CommentRestService'];
    function _($scope, $stateParams, CommentRestService) {
        var $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.pic = $stateParams.pic;
            console.log($stateParams);
            feather.replace();
        };
    }
})();