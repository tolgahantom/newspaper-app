import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  message: string;

  constructor() {
    this.message = '';
  }

  setData(data: string) {
    this.message = data;
  }

  getData() {
    return this.message;
  }
}
