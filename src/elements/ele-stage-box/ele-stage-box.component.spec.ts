import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleStageBoxComponent } from './ele-stage-box.component';

describe('EleStageBoxComponent', () => {
  let component: EleStageBoxComponent;
  let fixture: ComponentFixture<EleStageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleStageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleStageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
