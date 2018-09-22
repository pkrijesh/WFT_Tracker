import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmscontactComponent } from './amscontact.component';

describe('AmscontactComponent', () => {
  let component: AmscontactComponent;
  let fixture: ComponentFixture<AmscontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmscontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmscontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
