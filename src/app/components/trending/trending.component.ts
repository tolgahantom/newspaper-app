import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  searchedNews: News[] = [];
  month: any[] = [];
  p: number = 1;
  loading: boolean = false;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getGetAllNews().subscribe((data) => {
      this.searchedNews = data.articles;
    });
  }

  findMonthName(date: Date) {
    const id = new Date(date).getMonth();
    return this.month[id - 1];
  }

  findDate(date: Date) {
    return new Date(date).getDate();
  }
}
