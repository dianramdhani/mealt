(function () {
    'use strict';

    window.app
        .directive('trImageChanger', trImageChanger);

    trImageChanger.$inject = ['CONFIG'];
    function trImageChanger(CONFIG) {
        // Usage:
        // Change image src if has model.
        // Creates:
        // Call by dashboard.
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            const url = CONFIG.IMAGEURL;
            try {
                if (scope.item.plan.meal.pic !== '') {
                    attrs.$set('src', `${url}${scope.item.plan.meal.pic}`);
                }
            } catch (err) {
                if (scope.meal.pic !== '') {
                    attrs.$set('src', `${url}${scope.meal.pic}`);
                }
            }
        }
    }
})();