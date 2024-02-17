import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from "../../model/article/article"
@Injectable({
  providedIn: 'root'
})
export class ArticleService {


 
  private  apiUrl = ''


  constructor(private http: HttpClient) { 

  }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl);
  }
}
