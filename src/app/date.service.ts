import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface DateResponse {
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor(private http: HttpClient) {}
  getDate(): Observable<DateResponse> {
    return interval(1000).pipe(
      switchMap(() => this.http.get<DateResponse>(`http://localhost:8080`))
    );
  }
}
