import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';

import { Ng10NameComponent } from './ng10/components/ng10-name.component';

import * as angular from 'angular';
import { SharedService } from './ng10/services/shared.service';

@NgModule({
  declarations: [
    Ng10NameComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [SharedService],
  entryComponents: [
    Ng10NameComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
  }
}
