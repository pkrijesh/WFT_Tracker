import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VwManualactivityComponent } from './vw-manualactivity.component';

describe('VwManualactivityComponent', () => {
  let component: VwManualactivityComponent;
  let fixture: ComponentFixture<VwManualactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VwManualactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VwManualactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
