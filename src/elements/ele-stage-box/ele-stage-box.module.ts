import {NgModule} from '@angular/core';
import {EleStageBoxComponent} from './ele-stage-box.component';
import {EleModule} from '../ele-module';

@NgModule({
  imports: [
    EleModule
  ],
  declarations: [
    EleStageBoxComponent
  ],
  exports: [
    EleStageBoxComponent
  ]
})
export class EleStageBoxModule {
}
