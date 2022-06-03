import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourdulichComponent } from './tourdulich.component';

describe('TourdulichComponent', () => {
  let component: TourdulichComponent;
  let fixture: ComponentFixture<TourdulichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourdulichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourdulichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
