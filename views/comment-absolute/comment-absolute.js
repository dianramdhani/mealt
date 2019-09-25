require('./comment-absolute.css');
const feather = require('feather-icons');

(function () {
    'use strict';

    // Usage:
    // Comment absolute like modal.

    window.app
        .component('commentAbsolute', {
            template: require('./comment-absolute.html'),
            controller: _,
            bindings: {
                meal: '<',
            },
        });

    _.$inject = ['$scope', '$timeout', '$element', 'CommentRestService'];
    function _($scope, $timeout, $element, CommentRestService) {
        const reloadData = () => {
            feather.replace();
            $scope.meal = $ctrl.meal;
            CommentRestService.getAllComment({ mealId: $scope.meal.id }).then(({ data }) => {
                $scope.comments = data.comments;
            });
        }

        var $ctrl = this;
        $ctrl.$onInit = () => {
            $timeout(reloadData);
        };

        $scope.send = async () => {
            await CommentRestService.createComment({ mealId: $scope.meal.id, comment: $scope.myComment });
            reloadData();
            $scope.myComment = '';
            $scope.$apply();
        };

        $scope.back = () => {
            $element.remove();
        };
    }
})();