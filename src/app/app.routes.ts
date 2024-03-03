import { Routes } from '@angular/router';
import { PageArticleComponent } from './views/page-article/page-article.component';
import { PageDetailArticleComponent } from './views/page-detail-article/page-detail-article.component';
import { HomeComponent } from './views/home/home.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [

  {path: "articles",  component: PageArticleComponent},
  {path: 'detailArticle', component: PageDetailArticleComponent },
  {path: '', component: HomeComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'login', component: LoginComponent}

];
