import { Component } from '@angular/core';
import { DateResponse, DateService } from './date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date: Date | string = 'Loading...';

  constructor(private service: DateService) {
    this.service.getDate().subscribe(
      (response: DateResponse) => (this.date = response.date),
      (error: any) => (this.date = 'Unavailable')
    );
  }
}
