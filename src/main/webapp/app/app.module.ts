import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { BroadleafNgDemoSiteSharedModule, UserRouteAccessService } from './shared';
import { BroadleafNgDemoSiteAppRoutingModule} from './app-routing.module';
import { BroadleafNgDemoSiteHomeModule } from './home/home.module';
import { BroadleafNgDemoSiteAdminModule } from './admin/admin.module';
import { BroadleafNgDemoSiteAccountModule } from './account/account.module';
import { BroadleafNgDemoSiteEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BroadleafNgDemoSiteAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BroadleafNgDemoSiteSharedModule,
        BroadleafNgDemoSiteHomeModule,
        BroadleafNgDemoSiteAdminModule,
        BroadleafNgDemoSiteAccountModule,
        BroadleafNgDemoSiteEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BroadleafNgDemoSiteAppModule {}
