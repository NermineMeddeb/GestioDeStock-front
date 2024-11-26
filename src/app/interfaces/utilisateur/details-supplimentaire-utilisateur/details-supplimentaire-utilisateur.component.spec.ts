import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSupplimentaireUtilisateurComponent } from './details-supplimentaire-utilisateur.component';

describe('DetailsSupplimentaireUtilisateurComponent', () => {
  let component: DetailsSupplimentaireUtilisateurComponent;
  let fixture: ComponentFixture<DetailsSupplimentaireUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSupplimentaireUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSupplimentaireUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
