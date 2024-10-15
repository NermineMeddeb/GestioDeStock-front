import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueDEnsembleComponent } from './vue-d-ensemble.component';

describe('VueDEnsembleComponent', () => {
  let component: VueDEnsembleComponent;
  let fixture: ComponentFixture<VueDEnsembleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueDEnsembleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueDEnsembleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
