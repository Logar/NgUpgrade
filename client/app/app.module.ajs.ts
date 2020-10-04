import * as angular from 'angular';

import { downgradeInjectable } from '@angular/upgrade/static';
import { SharedService } from './ng10/services/shared.service';

export default angular.module('app', [])
.factory('sharedService', downgradeInjectable(SharedService));
