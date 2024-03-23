import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from  '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  backendMessage: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/hello').pipe(
      catchError((error: any) => {
        return of(error);
      })
    ).subscribe((response: any) => {
      this.backendMessage = response.message as string;
    });
  }
}
