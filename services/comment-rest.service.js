(function () {
    'use strict';

    window.app
        .service('CommentRestService', CommentRestService);

    CommentRestService.$inject = ['$http', 'CONFIG'];
    function CommentRestService($http, CONFIG) {
        this.getAllComment = getAllComment;
        this.createComment = createComment;

        const url = CONFIG.API;

        function getAllComment({ mealId }) {
            return $http.get(`${url}/comment/meal`, { params: { mealId } });
        }

        function createComment({ mealId, comment }) {
            return $http.post(`${url}/comment`, {}, { params: { mealId, comment } });
        }
    }
})();