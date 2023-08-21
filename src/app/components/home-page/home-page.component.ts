import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  editorsPick: News[] = [];
  news: News[] = [];
  trending: News[] = [];
  popular: News[] = [];
  recents: News[] = [];
  politicsNews: News[] = [];
  businessNews: News[] = [];
  month: any[] = [];
  selectedArticle: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getGetAllNews().subscribe((data) => {
      this.news = data.articles;
      this.recents = this.news.slice(8, 11);
      this.trending = this.news.slice(0, 3);
      this.selectedArticle = this.news[0];
    });

    this.newsService.getPopularNews().subscribe((data) => {
      this.popular = data.articles;
      this.popular.splice(3, 100);
    });

    this.newsService.getNewsByCategoryName('business').subscribe((data) => {
      this.businessNews = data.articles.slice(0, 3);
    });

    this.newsService.getNewsByCategoryName('politics').subscribe((data) => {
      this.politicsNews = data.articles.slice(2, 5);
    });

    this.newsService.getEverythingSortedByPopularity().subscribe((data) => {
      for (let index = 0; index < data.articles.length; index++) {
        if (data.articles[index].author == 'Juli Clover') {
          this.editorsPick.push(data.articles[index]);
        }
      }
      this.editorsPick.splice(0, 3);
    });

    this.month = this.newsService.getMonths();
  }

  findMonthName(date: Date) {
    const id = new Date(date).getMonth();
    return this.month[id - 1];
  }

  findDate(date: Date) {
    return new Date(date).getDate();
  }

  paddedNumber(originalNumber: number): string {
    return originalNumber.toString().padStart(2, '0');
  }
}
