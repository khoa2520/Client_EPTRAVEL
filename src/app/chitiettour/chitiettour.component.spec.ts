import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiettourComponent } from './chitiettour.component';

describe('ChitiettourComponent', () => {
  let component: ChitiettourComponent;
  let fixture: ComponentFixture<ChitiettourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitiettourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitiettourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
