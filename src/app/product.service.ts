import { Injectable } from '@angular/core'; // decorador se usa para indicar que una clase es un servicio que puede ser inyectado en otros componentes o servicios.
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'api/products';  // URL to web api

    // Configuración de encabezados HTTP
  httpOptions = {                     // forma de comunicar al servidor que la solicitud contiene datos en formato JSON
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

// recibimos una instancia para utilizar el servicio HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> { // devuelve un Observable que emitirá arrays de objetos del tipo Product.
    // Angular hace el casting de JSON y lo mete a un arreglo de products  this.http.get<Product[]>
    return this.http.get<Product[]>(this.productsUrl).pipe( // se conecta por metodo get a la URL
      tap(_ => console.log('fetched Products')), // cada vez que el observable emite datos o la solicitud es exitosa se ejecuta el tap como efecto secundario
      catchError(this.handleError<Product[]>('getProducts', [])) // Manejo de errores
    );
  }

  getProduct(id: number): Observable<Product> { // devuelve un Observable que emitirá objetos del tipo Product.
    const url = `${this.productsUrl}/${id}`;  // Se crea la URL
    return this.http.get<Product>(url).pipe( // se conecta por metodo get a la URL
      tap(_ => console.log(`fetched Product id=${id}`)), // cada vez que el observable emite datos o la solicitud es exitosa se ejecuta el tap como efecto secundario
      catchError(this.handleError<Product>(`getProduct id=${id}`)) //Manejo de errores
    );
  }


  addProduct(Product: Product): Observable<Product> {  // devuelve un Observable que emitirá un objeto del tipo Product.
    return this.http.post<Product>(this.productsUrl, Product, this.httpOptions).pipe( // realiza una solicitud HTTP POST al servidor usando la URL de destino, Restaurant es el contenido que se enviará en el cuerpo de la solicitud
                                                              // se utiliza 'this.httpOptions' para configurar la solicitud.
      tap((newProduct: Product) => console.log(`added Product id=${newProduct.id}`)), // cada vez que se agrega un restaurante se ejecuta el tap como efecto secundario
      catchError(this.handleError<Product>('addProduct')) //Manejo de errores
    );
  }

  deleteProduct(id: number): Observable<Product> { // devuelve un Observable que emitirá objetos del tipo Product.
                                      // elimina un product y notifica cuando la operación ha sido completada.
    const url = `${this.productsUrl}/${id}`; // Se crea la URL
    return this.http.delete<Product>(url, this.httpOptions).pipe( //  realiza una solicitud HTTP DELETE al servidor utilizando la URL construida
                                                            // se utiliza 'this.httpOptions' para configurar la solicitud.
      tap(_ => console.log(`deleted Product id=${id}`)), // cada vez que se elimine un product se ejecuta el tap como efecto secundario
      catchError(this.handleError<Product>('deleteProduct')) //Manejo de errores
    );
  }

  updateProduct(Product: Product): Observable<any> { // Devuelve un Observable que emitirá cualquier tipo de objeto
    return this.http.put(this.productsUrl, Product, this.httpOptions).pipe( // realiza una solicitud HTTP PUT para actualizar el producto en el servidor.
                                                                // Se envía el objeto 'Product' en el cuerpo de la solicitud y 'this.httpOptions' para configurar la solicitud.
      tap(_ => console.log(`updated Product id=${Product.id}`)), // cada vez que se actualice un restaurante se ejecuta el tap como efecto secundario
      catchError(this.handleError<any>('updateProduct')) //Manejo de errores
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
