import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isOpenCategoriesMenu: boolean = false;

  constructor(
    private shareService: ShareService,
    private route: Router,
    private elRef: ElementRef,
    private eventService: EventService
  ) {}

  toggleMenu() {
    this.isOpenCategoriesMenu = !this.isOpenCategoriesMenu;
  }

  sendDataToService(data: string, e: Event) {
    e.preventDefault();
    this.shareService.setData(data);
    this.route.navigate(['search']);
    this.elRef.nativeElement.querySelector('#search').value = '';
    this.eventService.triggerClickEvent();
  }
}
