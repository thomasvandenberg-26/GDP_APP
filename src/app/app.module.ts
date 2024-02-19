import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule
import { RouterModule, Routes } from '@angular/router';
import { PageArticleComponent } from './views/page-article/page-article.component';

const routes : Routes = [
  { path: 'detail-article/:id', component: DetailArticleComponent},
]

@NgModule({
  declarations: [
    // AppRoutingModule,

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    ArticleComponent,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    PageArticleComponent,
  ],
  providers: [
    provideClientHydration()
  ],

})
export class AppModule { }
