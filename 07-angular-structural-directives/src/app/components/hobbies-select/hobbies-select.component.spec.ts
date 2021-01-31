import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesSelectComponent } from './hobbies-select.component';

describe('HobbiesSelectComponent', () => {
  let component: HobbiesSelectComponent;
  let fixture: ComponentFixture<HobbiesSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
