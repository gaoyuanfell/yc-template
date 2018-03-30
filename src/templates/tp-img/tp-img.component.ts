import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-tp-img',
  templateUrl: './tp-img.component.html',
  styleUrls: ['./tp-img.component.less']
})
export class TpImgComponent implements OnInit {

  constructor(private vcrf: ViewContainerRef) {
    this.viewContainerRef = vcrf;
    console.info(vcrf);
  }

  viewContainerRef;

  ngOnInit() {
    console.info('ok');
  }

  @Input() url = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522318809476&di=7d8ff7d58bf591a3f70994d0303ce2ef&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20151029%2Ftooopen_sy_146750127927.jpg`;

}
