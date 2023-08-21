import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = '576d985996674195818480706bb73b2d';
  url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
  month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  constructor(private http: HttpClient) {}

  getGetAllNews(): Observable<any> {
    return this.http.get<any>(this.url + this.apiKey);
  }

  getPopularNews(): Observable<any> {
    return this.http.get<any>(
      'https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=' +
        this.apiKey
    );
  }

  getEverythingSortedByPopularity(): Observable<any> {
    return this.http.get<any>(
      'https://newsapi.org/v2/everything?q=apple&from=2023-08-15&to=2023-08-15&sortBy=popularity&apiKey=' +
        this.apiKey
    );
  }

  getMonths() {
    return this.month;
  }

  getNewsByCategoryName(name: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/top-headlines?country=us&category=${name}&apiKey=${this.apiKey}`
    );
  }

  getNewsByName(name: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/everything?q=${name}&apiKey=${this.apiKey}`
    );
  }
}
