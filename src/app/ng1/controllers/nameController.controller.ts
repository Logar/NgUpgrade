import app from '../../app.module.ajs';

(function () {
    app.controller('nameController', function ($scope, sharedService) {
      
      $scope.onSubmit = function () {
        console.log('onSubmit inside ng1', $scope.name);
        sharedService.broadcast({
          name: 'event.submitted'
        });
      }
    });
})();