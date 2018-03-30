import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleImgComponent } from './ele-img.component';

describe('EleImgComponent', () => {
  let component: EleImgComponent;
  let fixture: ComponentFixture<EleImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
