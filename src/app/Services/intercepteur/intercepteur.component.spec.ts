import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercepteurComponent } from './intercepteur.component';

describe('IntercepteurComponent', () => {
  let component: IntercepteurComponent;
  let fixture: ComponentFixture<IntercepteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercepteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntercepteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
