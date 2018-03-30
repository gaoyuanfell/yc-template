import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FileUploadDirective} from '../../components/file-upload/file-upload.directive';
import {RouterModule} from '@angular/router';
import {EleImgModule} from '../../elements/ele-img/ele-img.module';
import {EleStageBoxModule} from '../../elements/ele-stage-box/ele-stage-box.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    EleImgModule,
    EleStageBoxModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ////////////
    EleImgModule,
    EleStageBoxModule,
    ////////////
    FileUploadDirective,
  ],
  declarations: [
    FileUploadDirective
  ]
})
export class ShareModule {

}
