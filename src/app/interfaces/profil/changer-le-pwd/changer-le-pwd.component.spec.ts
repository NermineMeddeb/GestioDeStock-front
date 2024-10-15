import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerLePwdComponent } from './changer-le-pwd.component';

describe('ChangerLePwdComponent', () => {
  let component: ChangerLePwdComponent;
  let fixture: ComponentFixture<ChangerLePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerLePwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerLePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
