import { Component,OnInit} from '@angular/core';
import { Article } from '../../model/article/article.model';
import { ArticleService } from '../../services/article/article.service';
import { ArticleComponent } from '../../article/article.component';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-page-article',
  imports: [ArticleComponent, ButtonModule,HeaderComponent],
  standalone: true,
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent {

}
// articles : Article[] = [];

  // constructor(private articleService: ArticleService, private router : Router) { }

  // // ngOnInit(): void {
  // //   this.articleService.getArticles()
  // //     .subscribe(articles => this.articles = articles);
  // // }
