import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/models/news';
import { EventService } from 'src/app/services/event.service';
import { NewsService } from 'src/app/services/news.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-searched-page',
  templateUrl: './searched-page.component.html',
  styleUrls: ['./searched-page.component.scss'],
})
export class SearchedPageComponent implements OnInit {
  searchedNews: News[] = [];
  searchedSubject: string = '';
  month: any[] = [];
  p: number = 1;
  loading: boolean = false;
  cannotFind: boolean = false;
  private clickEventSubscription: Subscription;

  constructor(
    private shareService: ShareService,
    private newsService: NewsService,
    private eventService: EventService
  ) {
    this.clickEventSubscription = this.eventService.clickEvent$.subscribe(
      () => {
        this.searchNews();
      }
    );
  }

  ngOnInit(): void {
    this.month = this.newsService.getMonths();
    this.searchNews();
  }

  searchNews() {
    this.loading = true;
    this.cannotFind = false;
    this.searchedSubject = this.shareService.getData();
    this.newsService
      .getNewsByName(this.shareService.getData())
      .subscribe((data) => {
        this.loading = false;
        this.searchedNews = data.articles;
        this.p = 1;
        if (data.articles.length == 0) {
          this.cannotFind = true;
        }
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
