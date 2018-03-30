import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ShareModule} from './share/share.module';
import {IndexComponent} from './index/index.component';
import {CompilerUtil} from '../compiler/compiler.util';
import {EleStageBoxModule} from '../elements/ele-stage-box/ele-stage-box.module';
import {EleImgModule} from '../elements/ele-img/ele-img.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';

const ELEMENT_MODULE = [
  EleImgModule,
  EleStageBoxModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
  ],
  imports: [
    ShareModule,
    AppRoutingModule,
    OverlayModule,
    PortalModule,
    ////////////////
    ...ELEMENT_MODULE,
    ////////////////
    BrowserModule.withServerTransition({appId: 'yc-template'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [
    CompilerUtil
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
