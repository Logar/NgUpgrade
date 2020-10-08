import app from '../../app.module.ajs';

(function () {
    app.controller('nameController', function ($scope, sharedService) {
      
      $scope.onSubmit = function () {
        console.log('---- Submit handler inside ng1 ----');
        console.log('Name: ', $scope.firstname, $scope.lastname);
        
        // Emit event to parent
        sharedService.emit({
          name: 'event.submitted'
        });
      }
    });
})();