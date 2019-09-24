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
        const reloadData = () => {
            feather.replace();
            $scope.meal = JSON.parse($stateParams.meal);
            $scope.backState = $stateParams.backState;
            CommentRestService.getAllComment({ mealId: $scope.meal.id }).then(({ data }) => {
                $scope.comments = data.comments;
            });
        }

        var $ctrl = this;
        $ctrl.$onInit = () => {
            reloadData();
        };

        $scope.send = async () => {
            await CommentRestService.createComment({ mealId: $scope.meal.id, comment: $scope.myComment });
            reloadData();
            $scope.myComment = '';
            $scope.$apply();
        };
    }
})();