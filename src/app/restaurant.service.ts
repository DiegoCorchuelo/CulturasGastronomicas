import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantUrl = 'api/restaurants';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantUrl).pipe(
      tap(_ => console.log('fetched Restaurants')),
      catchError(this.handleError<Restaurant[]>('getRestaurants', []))
    );
  }

  getRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.restaurantUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      tap(_ => console.log(`fetched Restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>(`getRestaurant id=${id}`))
    );
  }


  addRestaurant(Restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.restaurantUrl, Restaurant, this.httpOptions).pipe(
      tap((newRestaurant: Restaurant) => console.log(`added Restaurant w/ id=${newRestaurant.id}`)),
      catchError(this.handleError<Restaurant>('addRestaurant'))
    );
  }

  deleteRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.restaurantUrl}/${id}`;
    return this.http.delete<Restaurant>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>('deleteRestaurant'))
    );
  }

  updateRestaurant(Restaurant: Restaurant): Observable<any> {
    return this.http.put(this.restaurantUrl, Restaurant, this.httpOptions).pipe(
      tap(_ => console.log(`updated Restaurant id=${Restaurant.id}`)),
      catchError(this.handleError<any>('updateRestaurant'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
