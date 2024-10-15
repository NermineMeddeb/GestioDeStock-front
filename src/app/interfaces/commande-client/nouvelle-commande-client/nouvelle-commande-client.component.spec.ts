import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCommandeClientComponent } from './nouvelle-commande-client.component';

describe('NouvelleCommandeClientComponent', () => {
  let component: NouvelleCommandeClientComponent;
  let fixture: ComponentFixture<NouvelleCommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCommandeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
