import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinkhachhangComponent } from './thongtinkhachhang.component';

describe('ThongtinkhachhangComponent', () => {
  let component: ThongtinkhachhangComponent;
  let fixture: ComponentFixture<ThongtinkhachhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongtinkhachhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
