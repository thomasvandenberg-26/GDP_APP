import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailArticleComponent } from './page-detail-article.component';

describe('PageDetailArticleComponent', () => {
  let component: PageDetailArticleComponent;
  let fixture: ComponentFixture<PageDetailArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
