
import app from '../../app.module.ajs';
(function () {
    app.directive("testTag", function() {
        return {
            template : "<div class=\"ng1\"><h3>AngularJS (NG1) Directive!</h3> </div>"
        };
    });
})();




