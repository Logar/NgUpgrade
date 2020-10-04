import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';

import { Ng4NameComponent } from './ng4/components/ng4-name.component';

import * as angular from 'angular';
import { SharedService } from './ng4/services/shared.service';

@NgModule({
  declarations: [
    Ng4NameComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [SharedService],
  entryComponents: [
    Ng4NameComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
  }
}
