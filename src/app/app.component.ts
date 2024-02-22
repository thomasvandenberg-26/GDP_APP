import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageArticleComponent } from './views/page-article/page-article.component';
import { PageDetailArticleComponent } from './views/page-detail-article/page-detail-article.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PageArticleComponent, HeaderComponent, FooterComponent, PageDetailArticleComponent],
  template: `
  <main>
    <section class="content">
      <app-header>
        <page-article>
        <app-page-detail-article>
      <app-footer>
    </section>
  </main>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
title = 'GDP_APP';
}
