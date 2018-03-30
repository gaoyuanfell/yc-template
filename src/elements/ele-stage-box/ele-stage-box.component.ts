import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ele-stage-box',
  templateUrl: './ele-stage-box.component.html',
  styleUrls: ['./ele-stage-box.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class EleStageBoxComponent implements OnInit {

  constructor() {
  }

  _style;
  @Input('stageStyle') set style(val) {
    this._style = val;
  }

  get style() {
    return this._style;
  }

  ngOnInit() {
  }
}
