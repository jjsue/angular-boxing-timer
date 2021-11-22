import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTimerComponent } from './the-timer.component';

describe('TheTimerComponent', () => {
  let component: TheTimerComponent;
  let fixture: ComponentFixture<TheTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
