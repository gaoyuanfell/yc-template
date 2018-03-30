import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TpImgComponent} from './tp-img.component';

describe('TpImgComponent', () => {
  let component: TpImgComponent;
  let fixture: ComponentFixture<TpImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TpImgComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
