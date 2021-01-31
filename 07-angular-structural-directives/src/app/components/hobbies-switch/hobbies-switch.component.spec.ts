import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesSwitchComponent } from './hobbies-switch.component';

describe('HobbiesSwitchComponent', () => {
  let component: HobbiesSwitchComponent;
  let fixture: ComponentFixture<HobbiesSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
