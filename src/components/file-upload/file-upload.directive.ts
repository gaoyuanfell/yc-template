import {Directive, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output, Renderer2} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[fileUpload]',
})
export class FileUploadDirective implements OnInit {

  constructor(private _sanitizer: DomSanitizer,
              @Inject(DOCUMENT) private _document: HTMLDocument,
              private _renderer2: Renderer2,
              private _ref: ElementRef) {

    const inputRef = <HTMLInputElement>_document.createElement('input');
    inputRef.type = 'file';
    _renderer2.setStyle(inputRef, 'display', 'none');
    _renderer2.appendChild(_ref.nativeElement, inputRef);
    this.fileRef = inputRef;
  }

  fileRef: HTMLInputElement;

  ngOnInit() {
  }

  @Input('drop') isDrop;
  @Input('maxSize') maxSize = 100;
  @Input('dataType') dataType: 'M' | 'K' | 'B' = 'M';
  @Input('multiple') multiple: boolean = false;
  @Output('eventChange') eventChange = new EventEmitter<any>();
  @Output('eventDragleave') eventDragleave = new EventEmitter<any>();
  @Output('eventDragenter') eventDragenter = new EventEmitter<any>();
  @Output('eventDragover') eventDragover = new EventEmitter<any>();
  @Input('type') type = ['image'];
  @Input('disabled') disabled = false;


  getByte() {
    let byte = 0;
    switch (this.dataType) {
      case 'M':
        byte = this.maxSize * 1024 * 1024;
        break;
      case 'K':
        byte = this.maxSize * 1024;
        break;
      case 'B':
        byte = this.maxSize;
        break;
    }
    return byte;
  }

  getByteStr() {
    let byteStr = '';
    switch (this.dataType) {
      case 'M':
        byteStr = this.maxSize + 'M';
        break;
      case 'K':
        byteStr = this.maxSize + 'KB';
        break;
      case 'B':
        byteStr = this.maxSize + 'byte';
        break;
    }
    return byteStr;
  }

  change(file) {
    const f = file.files[0];
    if (f && f.size > this.getByte()) {
      // layer.msg(`文件不能大于${this.getByteStr()}`);
      this.fileRef.value = null;
      return;
    }
    this.eventChange.emit(file.files);
    this.fileRef.value = null;
  }

  @HostListener('click')
  eventClick() {
    if (this.disabled) return;
    this.fileRef.click();
  }

  @HostListener('dragleave', ['$event'])
  dragleave(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.isDrop) return;
    this.eventDragleave.emit(e);
  }

  @HostListener('dragenter', ['$event'])
  dragenter(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.isDrop) return;
    this.eventDragenter.emit(e);
  }

  @HostListener('dragover', ['$event'])
  dragover(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.isDrop) return;
    this.eventDragover.emit(e);
  }

  @HostListener('drop', ['$event'])
  drop(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.isDrop) return;
    if (this.disabled) return;
    const f = e.dataTransfer.files[0];
    if (f && f.size > this.maxSize * 1024 * 1024) {
      // layer.msg(`文件不能大于${this.getByteStr()}`);
      return;
    }
    this.eventChange.emit(e.dataTransfer.files);
  }
}
