import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  news: News[] = [];
  month: any[] = [];
  popular: any[] = [];
  p: number = 1;
  loading: boolean = false;

  categoryName: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.loading = true;
      this.categoryName = params.get('categoryName');
      this.newsService
        .getNewsByCategoryName(String(this.categoryName))
        .subscribe((data) => {
          this.news = data.articles;
          this.loading = false;
          this.p = 1;
        });
    });

    this.newsService.getPopularNews().subscribe((data) => {
      this.popular = data.articles;
      this.popular.splice(3, 100);
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
