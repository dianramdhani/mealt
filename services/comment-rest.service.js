(function () {
    'use strict';

    window.app
        .service('CommentRestService', CommentRestService);

    CommentRestService.$inject = ['$http', 'CONFIG'];
    function CommentRestService($http, CONFIG) {
        this.getAllComment = getAllComment;

        const url = CONFIG.API;

        function getAllComment(mealId) {
            return $http.get(`${url}/comment/meal`, { params: { mealId } });
        }
    }
})();