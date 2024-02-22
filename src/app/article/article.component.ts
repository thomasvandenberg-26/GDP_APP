import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';
import { Article } from '../model/article/article.model';
import { Router} from '@angular/router';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, CardModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  template: `
  <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    `,
})
export class ArticleComponent {

    @Input() article: Article =  { id: 0, title: '', price: 0 , quantity : 0, description: ''}; ;
   @Input() title: string = '';
   @Input() price: number = 0;
  @Input() quantity: number = 0;
  @Input() description: string = '';

  constructor(private router : Router)
  {}

  navigateToAbout(){
    this.router.navigate(['/detailArticle']);
  }
  // content: string = "Contenu de l'article à afficher.";
  // cheminImage:any ="../assets/ds.jpg";


}
