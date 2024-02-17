import { Component,OnInit} from '@angular/core';
import { Article } from '../../model/article/article';
import { ArticleService } from '../../services/article/article.service';
import { ArticleComponent } from '../../article/article.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-article',
  imports: [ArticleComponent],
  standalone: true,
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit{
  articles : Article[] = []; 

  constructor(private articleService: ArticleService, private router : Router) { }

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }
 
}
