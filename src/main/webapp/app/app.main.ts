import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { BroadleafNgDemoSiteAppModule } from './app.module';
import { AppModule } from '../ngx-admin/app/app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

if(document.URL.indexOf('ngx-admin.html')>1){
    platformBrowserDynamic().bootstrapModule(AppModule)
    .then((success) => console.log(`Ngx-Admin Application started`))
    .catch((err) => console.error(err));
    
}else if(document.URL.indexOf('jhipster.html')>1){
    platformBrowserDynamic().bootstrapModule(BroadleafNgDemoSiteAppModule)
    .then((success) => console.log(`Application started`))
    .catch((err) => console.error(err));
}
else{
    platformBrowserDynamic().bootstrapModule(BroadleafNgDemoSiteAppModule)
    .then((success) => console.log(`Application started`))
    .catch((err) => console.error(err));    
}
