import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvementDeStockComponent } from './mouvement-de-stock.component';

describe('MouvementDeStockComponent', () => {
  let component: MouvementDeStockComponent;
  let fixture: ComponentFixture<MouvementDeStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouvementDeStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouvementDeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
