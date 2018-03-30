import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-home',
  template: `
    <h3>{{ message }}</h3>
    <h3>{{ number }}</h3>
    <h3>{{ data | json }}</h3>
    <a [routerLink]="['lazy']">lazy</a>
  `
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private http: HttpClient, private updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

  number = 0;
  data;

  ngOnInit() {
    this.message = 'Hello';
    ++this.number;
    this.http.get('http://localhost:3000/word').subscribe(res => {
      this.data = res;
    });
  }
}
