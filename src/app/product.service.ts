import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'api/products';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(_ => console.log('fetched Products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched Product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }


  addProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, Product, this.httpOptions).pipe(
      tap((newProduct: Product) => console.log(`added Product w/ id=${newProduct.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  updateProduct(Product: Product): Observable<any> {
    return this.http.put(this.productsUrl, Product, this.httpOptions).pipe(
      tap(_ => console.log(`updated Product id=${Product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
