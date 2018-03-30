import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  Renderer2, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {DOCUMENT} from '@angular/common';
import {CompilerUtil} from '../../compiler/compiler.util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: HTMLDocument,
              private viewContainerRef: ViewContainerRef,
              private _ref: ElementRef,
              private overlay: Overlay,
              private _renderer: Renderer2,
              private _changeDetectorRef: ChangeDetectorRef,
              private _componentFactoryResolver: ComponentFactoryResolver,
              private _compilerUtil: CompilerUtil,
              private _injector: Injector) {

  }

  @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef;
  @ViewChild('tp', {read: TemplateRef}) tp: TemplateRef<any>;
  @ViewChild('er', {read: ElementRef}) er: ElementRef;

  ngOnInit() {
    this._compilerUtil.compile({
      template: `<div>123</div>`,
      viewContainerRef: this.vcr,
    }).then(({factory, componentRef}) => {
    });

    this._compilerUtil.compile({
      template: `<ele-stage-box [stageStyle]="stageStyle">
                  <ele-img [eleStyle]="eleStyle"></ele-img>
                 </ele-stage-box>`,
      viewContainerRef: this.vcr,
    }).then(({factory, componentRef}) => {
      componentRef.instance.stageStyle = {
        width: '300px',
        height: '300px',
        position: 'absolute',
        'z-index': 200,
        top: '20px',
        left: '40px',
      };
      componentRef.instance.eleStyle = {
        width: '300px',
        height: '300px',
        position: 'absolute',
        'z-index': 200,
        top: '20px',
        left: '40px',
      };
    });

    this._compilerUtil.compile({
      template: `<ele-stage-box>
                   <ele-img [url]="'http://img05.tooopen.com/images/20150819/tooopen_sy_138946578587.jpg'"></ele-img>
                 </ele-stage-box>`,
      viewContainerRef: this.vcr,
    }).then(factory => {
    });

    this._compilerUtil.compile({
      template: `<a [routerLink]="['lazy']">lazy</a>`,
      viewContainerRef: this.vcr,
    }).then(factory => {
    });

  }


  ngOnDestroy(): void {
    this._compilerUtil.destroy();
  }
}
