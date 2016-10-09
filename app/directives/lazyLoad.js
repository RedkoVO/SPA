app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];

        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                if (scope.items.length < scope.users.length) {
                    scope.$apply(attr.whenScrolled);
                }
            }
        });
    };
});
