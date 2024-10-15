import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMouvementDeStockComponent } from './details-mouvement-de-stock.component';

describe('DetailsMouvementDeStockComponent', () => {
  let component: DetailsMouvementDeStockComponent;
  let fixture: ComponentFixture<DetailsMouvementDeStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMouvementDeStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMouvementDeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
