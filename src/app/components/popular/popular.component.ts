import { Component } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent {
  searchedNews: News[] = [];
  month: any[] = [];
  p: number = 1;
  loading: boolean = false;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getPopularNews().subscribe((data) => {
      this.searchedNews = data.articles;
      this.searchedNews.slice(3, 100);
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
