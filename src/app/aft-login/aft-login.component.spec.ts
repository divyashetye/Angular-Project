import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftLoginComponent } from './aft-login.component';

describe('AftLoginComponent', () => {
  let component: AftLoginComponent;
  let fixture: ComponentFixture<AftLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftLoginComponent]
    });
    fixture = TestBed.createComponent(AftLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
