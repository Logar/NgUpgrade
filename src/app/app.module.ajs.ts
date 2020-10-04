import * as angular from 'angular';
/* . . . */
import { downgradeInjectable } from '@angular/upgrade/static';
import { Heroes } from "./ng4/services/hero.serivce";

export default angular.module("app", [])
.factory('heroes', downgradeInjectable(Heroes));
