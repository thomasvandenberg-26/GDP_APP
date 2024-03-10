import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationArticleComponent } from './page-creation-article.component';

describe('PageCreationArticleComponent', () => {
  let component: PageCreationArticleComponent;
  let fixture: ComponentFixture<PageCreationArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreationArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCreationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
