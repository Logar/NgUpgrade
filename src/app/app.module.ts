import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UpgradeModule } from "@angular/upgrade/static";
import { downgradeComponent } from '@angular/upgrade/static';
import { HeroDetailComponent } from "./ng4/components/hero-detail.component";
import * as angular from 'angular';
import { Heroes } from "./ng4/services/hero.serivce";
import { AppComponent } from "./ng4/app.component";
import { TestDirective } from "./ng4/components/test.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [Heroes],
  entryComponents: [
    AppComponent,
    HeroDetailComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
  }
}
