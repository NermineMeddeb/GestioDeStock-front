import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMouvementDeStockArticleComponent } from './details-mouvement-de-stock-article.component';

describe('DetailsMouvementDeStockArticleComponent', () => {
  let component: DetailsMouvementDeStockArticleComponent;
  let fixture: ComponentFixture<DetailsMouvementDeStockArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMouvementDeStockArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMouvementDeStockArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
