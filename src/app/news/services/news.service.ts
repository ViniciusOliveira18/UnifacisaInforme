import { Injectable } from '@angular/core';
import { NewsModule } from '../news.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewsEndpoint } from '../models/enum/news-endpoint.enum';
import { NewsModel } from '../models/class/news-model';

@Injectable({
  providedIn: NewsModule
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews() {
    return this.http.get(`${environment.API_URL}/${NewsEndpoint.NEWS}`)
  }

  getNews(id: string) {
    return this.http.get(`${environment.API_URL}/${NewsEndpoint.NEWS}/${id}`)
  }

  createNews(news: NewsModel) {
    return this.http.post(`${environment.API_URL}/${NewsEndpoint.NEWS}`, news)
  }

  uptadeNews(news: NewsModel) {
    return this.http.put(`${environment.API_URL}/${NewsEndpoint.NEWS}`, news)
  }

  deleteNews(id: string) {
    return this.http.delete(`${environment.API_URL}/${NewsEndpoint.NEWS}/${id}`)
  }
}
