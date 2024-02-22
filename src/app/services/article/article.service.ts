import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from "../../model/article/article.model";
// import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {




  constructor(private http: HttpClient) {

  }

  // getArticles(): Observable<Article[]>{
  //   return this.http.get<Article[]>(environment.apiUrl);
  // }
}
