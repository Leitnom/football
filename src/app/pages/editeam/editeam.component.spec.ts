import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeamComponent } from './editeam.component';

describe('EditeamComponent', () => {
  let component: EditeamComponent;
  let fixture: ComponentFixture<EditeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
