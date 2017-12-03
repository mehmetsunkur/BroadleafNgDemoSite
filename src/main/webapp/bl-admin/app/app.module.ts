/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import '../../ngx-admin//typings.d';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from '../../ngx-admin/app/@core/core.module';

import { BlAdminAppComponent } from './app.component';
import { BlAdminAppRoutingModule } from './app-routing.module';
import { ThemeModule } from '../../ngx-admin/app/@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BlAdminAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    BlAdminAppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [BlAdminAppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class BlAdminAppModule {
}
