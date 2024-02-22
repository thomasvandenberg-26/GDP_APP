import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PageArticleComponent } from './views/page-article/page-article.component';
import { PageDetailArticleComponent } from './views/page-detail-article/page-detail-article.component';
import { HomeComponent } from './views/home/home.component';


// const routes : Routes = [
//     {path: "home", component: HomeComponent},
//     {path: "articles",  component: PageArticleComponent},
//     {path: 'detailArticle', component: PageDetailArticleComponent },


// ]



@NgModule({
  declarations: [],
  imports: [
    // CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
