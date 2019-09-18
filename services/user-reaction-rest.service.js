(function () {
    'use strict';

    window.app
        .service('UserReactionRestService', UserReactionRestService);

    UserReactionRestService.$inject = ['$http', 'CONFIG'];
    function UserReactionRestService($http, CONFIG) {
        this.like = like;
        this.dislike = dislike;
        this.bored = bored;

        const url = CONFIG.API;

        function like(mealId) {
            return $http.get(`${url}/userReaction/like/${mealId}`);
        }

        function dislike(mealId) {
            return $http.get(`${url}/userReaction/dislike/${mealId}`);
        }

        function bored(mealId) {
            return $http.get(`${url}/userReaction/bored/${mealId}`);
        }
    }
})();