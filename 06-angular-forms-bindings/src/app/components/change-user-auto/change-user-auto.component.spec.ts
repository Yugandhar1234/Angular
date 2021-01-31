import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserAutoComponent } from './change-user-auto.component';

describe('ChangeUserAutoComponent', () => {
  let component: ChangeUserAutoComponent;
  let fixture: ComponentFixture<ChangeUserAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
