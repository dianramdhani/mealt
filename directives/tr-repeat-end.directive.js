(function () {
    'use strict';

    window.app
        .directive('trRepeatEnd', trRepeatEnd);

    trRepeatEnd.$inject = [];
    function trRepeatEnd() {
        // Usage:
        // ngRepeat callback.
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
            if (scope.$last) {
                scope.$eval(attrs.repeatEnd);
            }
        }
    }
})();