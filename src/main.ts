

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { setAngularLib, downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import app from './app/app.module.ajs';
import "./app/ng1/controllers/myContrl.controller";
import "./app/ng1/directives/test.directive";
import { AppComponent } from "./app/ng4/app.component";
import { HeroDetailComponent } from "./app/ng4/components/hero-detail.component";



if (environment.production) {
  enableProdMode();
}

app.directive(
  'appRoot',
  downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory
);
app.directive(
  'heroDetail',
  downgradeComponent({ component: HeroDetailComponent }) as angular.IDirectiveFactory
);

setAngularLib(angular);
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule).then(platformRef => {
  console.log('angular (NG 4) bootstrapped');
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  console.log('getting update module');
  console.log('AngulaJS (NG1) app', app)
  upgrade.bootstrap(document.body, [app.name])
   console.log('ANgularJs (NG1) should be bootstrapped')
})