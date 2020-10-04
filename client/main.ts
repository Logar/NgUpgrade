import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { setAngularJSGlobal, downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import app from './app/app.module.ajs';
import './app/ng1/controllers/nameController.controller';
import { Ng10NameComponent } from './app/ng10/components/ng10-name.component';

if (environment.production) {
  enableProdMode();
}

app.directive(
  'ng10Name',
  downgradeComponent({ component: Ng10NameComponent }) as angular.IDirectiveFactory
);

setAngularJSGlobal(angular);
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule).then(platformRef => {
  console.log('Angular (NG4) bootstrapped');
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  console.log('UpgradeModule', upgrade);
  console.log('AngulaJS (NG1) app', app);
  upgrade.bootstrap(document.body, [app.name]);
  console.log('AngularJs (NG1) bootstrapped');
})