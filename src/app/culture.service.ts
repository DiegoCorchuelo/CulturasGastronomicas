import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Culture } from './culture';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  private culturesUrl = 'api/cultures';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCultures(): Observable<Culture[]> {
    return this.http.get<Culture[]>(this.culturesUrl).pipe(
      tap(_ => console.log('fetched cultures')),
      catchError(this.handleError<Culture[]>('getCultures', []))
    );
  }

  getCulture(id: number): Observable<Culture> {
    const url = `${this.culturesUrl}/${id}`;
    return this.http.get<Culture>(url).pipe(
      tap(_ => console.log(`fetched culture id=${id}`)),
      catchError(this.handleError<Culture>(`getCulture id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
