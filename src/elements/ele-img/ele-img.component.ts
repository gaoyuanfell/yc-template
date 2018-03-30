import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ele-img',
  templateUrl: './ele-img.component.html',
  styleUrls: ['./ele-img.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class EleImgComponent implements OnInit {

  constructor() {
  }

  @Input() url = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522318809476&di=7d8ff7d58bf591a3f70994d0303ce2ef&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20151029%2Ftooopen_sy_146750127927.jpg`;

  _style;
  @Input('eleStyle') set style(val) {
    this._style = val;
  }

  get style() {
    return this._style;
  }

  ngOnInit() {
  }


}
