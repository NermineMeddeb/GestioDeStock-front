import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSupplimentaireFournisseurComponent } from './details-supplimentaire-fournisseur.component';

describe('DetailsSupplimentaireFournisseurComponent', () => {
  let component: DetailsSupplimentaireFournisseurComponent;
  let fixture: ComponentFixture<DetailsSupplimentaireFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSupplimentaireFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSupplimentaireFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
