import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComfirmComponent } from './app-comfirm.component';

describe('AppComfirmComponent', () => {
  let component: AppComfirmComponent;
  let fixture: ComponentFixture<AppComfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
