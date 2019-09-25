(function () {
    'use strict';

    window.app
        .service('CommentRestService', CommentRestService);

    CommentRestService.$inject = ['$http', 'CONFIG'];
    function CommentRestService($http, CONFIG) {
        this.getAllComment = getAllComment;
        this.createComment = createComment;
        this.updateComment = updateComment;
        this.deleteComment = deleteComment;

        const url = CONFIG.API;

        function getAllComment({ mealId }) {
            return $http.get(`${url}/comment/meal`, { params: { mealId } });
        }

        function createComment({ mealId, comment }) {
            return $http.post(`${url}/comment`, {}, { params: { mealId, comment } });
        }

        function updateComment({ commentId, comment }) {
            return $http.post(`${url}/comment/update`, {}, { params: { commentId, comment } });
        }

        function deleteComment({ commentId }) {
            return $http.delete(`${url}/comment`, { params: { commentId } });
        }
    }
})();