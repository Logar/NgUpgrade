import * as angular from 'angular';
/* . . . */
import { Heroes } from "../../ng4/services/hero.serivce";
import app from '../../app.module.ajs';
(function () {
    app.controller('myCtrl', function ($scope, $timeout, heroes) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.onDelete = function (event) {
            console.log("DELETE EVENT TRIGGERED", event);
        }
        $scope.abc = function () {
            $timeout(function () {
                var hero = heroes.get()[0];
                $scope.firstName = hero.name + " ADDED BY ANGULAR 4 SERVICE";
            }
                , 5000);
        };
        $scope.abc();
    });
})();