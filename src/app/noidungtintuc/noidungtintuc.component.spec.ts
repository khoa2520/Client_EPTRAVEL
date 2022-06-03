import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidungtintucComponent } from './noidungtintuc.component';

describe('NoidungtintucComponent', () => {
  let component: NoidungtintucComponent;
  let fixture: ComponentFixture<NoidungtintucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoidungtintucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoidungtintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
