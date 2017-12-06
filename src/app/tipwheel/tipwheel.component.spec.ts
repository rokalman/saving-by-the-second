import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipwheelComponent } from './tipwheel.component';

describe('TipwheelComponent', () => {
  let component: TipwheelComponent;
  let fixture: ComponentFixture<TipwheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipwheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
