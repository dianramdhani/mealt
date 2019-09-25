(function () {
    'use strict';

    window.app
        .directive('trImageChanger', trImageChanger);

    trImageChanger.$inject = ['$timeout', 'CONFIG'];
    function trImageChanger($timeout, CONFIG) {
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
            $timeout(() => {
                const url = CONFIG.IMAGEURL;
                if (scope.hasOwnProperty('item')) {
                    if (scope.item.plan.meal.pic !== '') {
                        attrs.$set('src', `${url}${scope.item.plan.meal.pic}`);
                    }
                }
                if (scope.hasOwnProperty('meal')) {
                    if (scope.meal.pic !== '') {
                        attrs.$set('src', `${url}${scope.meal.pic}`);
                    }
                }
            });
        }
    }
})();