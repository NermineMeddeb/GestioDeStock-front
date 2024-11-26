import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerMotDePasseComponent } from './changer-le-pwd.component';

describe('ChangerLePwdComponent', () => {
  let component: ChangerMotDePasseComponent;
  let fixture: ComponentFixture<ChangerMotDePasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerMotDePasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
