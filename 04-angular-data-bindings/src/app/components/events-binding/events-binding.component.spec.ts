import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBindingComponent } from './events-binding.component';

describe('EventsBindingComponent', () => {
  let component: EventsBindingComponent;
  let fixture: ComponentFixture<EventsBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
