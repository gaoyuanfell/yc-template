import {NgModule} from '@angular/core';
import {EleImgComponent} from './ele-img.component';
import {EleModule} from '../ele-module';

@NgModule({
  imports: [
    EleModule
  ],
  declarations: [
    EleImgComponent
  ],
  exports: [
    EleImgComponent
  ],
  providers: []
})
export class EleImgModule {
}
