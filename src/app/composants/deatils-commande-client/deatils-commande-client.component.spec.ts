import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsCommandeClientComponent } from './deatils-commande-client.component';

describe('DeatilsCommandeClientComponent', () => {
  let component: DeatilsCommandeClientComponent;
  let fixture: ComponentFixture<DeatilsCommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatilsCommandeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatilsCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
