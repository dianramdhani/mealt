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

    _.$inject = ['$scope', '$timeout', '$element', '$rootScope', 'CommentRestService'];
    function _($scope, $timeout, $element, $rootScope, CommentRestService) {
        const reloadData = () => {
            $scope.meal = $ctrl.meal;
            CommentRestService.getAllComment({ mealId: $scope.meal.id }).then(({ data }) => {
                $scope.comments = data.comments;
                $timeout(() => feather.replace());
            });
            feather.replace();
        }

        var $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.user = $rootScope.global.user;
            $scope.flag = 'post';
            $timeout(reloadData);
        };

        $scope.send = async () => {
            if ($scope.flag === 'post') {
                await CommentRestService.createComment({ mealId: $scope.meal.id, comment: $scope.myComment });
                $scope.myComment = '';
            }
            if ($scope.flag === 'edit') {
                await CommentRestService.updateComment({ commentId: $scope.editComment.id, comment: $scope.editComment.comment });
                $scope.flag = 'post';
            }
            reloadData();
            $scope.$apply();
        };

        $scope.back = () => {
            $element.remove();
        };

        $scope.edit = (comment) => {
            $scope.editComment = angular.copy(comment);
            $scope.flag = 'edit';
            $timeout(() => {
                $element[0].querySelector('#edit').focus();
            });
        };

        $scope.delete = async () => {
            $scope.flag = 'post';
            await CommentRestService.deleteComment({ commentId: $scope.editComment.id });
            reloadData();
            $scope.$apply();
        };

        $scope.cancel = () => {
            $scope.flag = 'post';
        };
    }
})();