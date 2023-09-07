import { Injectable } from '@angular/core'; // decorador se usa para indicar que una clase es un servicio que puede ser inyectado en otros componentes o servicios.
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantUrl = 'api/restaurants';  // URL to web api

  // Configuración de encabezados HTTP
  httpOptions = {               // forma de comunicar al servidor que la solicitud contiene datos en formato JSON
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // recibimos una instancia para utilizar el servicio HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> { // devuelve un Observable que emitirá arrays de objetos del tipo Restaurant.
     // Angular hace el casting de JSON y lo mete a un arreglo de restaurants  this.http.get<Restaurant[]>
    return this.http.get<Restaurant[]>(this.restaurantUrl).pipe( // se conecta por metodo get a la URL
      tap(_ => console.log('fetched Restaurants')), // cada vez que el observable emite datos o la solicitud es exitosa se ejecuta el tap como efecto secundario
      catchError(this.handleError<Restaurant[]>('getRestaurants', [])) //Manejo de errores
    );
  }

  getRestaurant(id: number): Observable<Restaurant> { // devuelve un Observable que emitirá objetos del tipo Restaurant.
    const url = `${this.restaurantUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe( // se conecta por metodo get a la URL
      tap(_ => console.log(`fetched Restaurant id=${id}`)), // cada vez que el observable emite datos o la solicitud es exitosa se ejecuta el tap como efecto secundario
      catchError(this.handleError<Restaurant>(`getRestaurant id=${id}`)) //Manejo de errores
    );
  }


  addRestaurant(Restaurant: Restaurant): Observable<Restaurant> { // devuelve un Observable que emitirá un objeto del tipo Restaurant.
                                          // agrega un restaurante y notifica cuando la operación ha sido completada.
    return this.http.post<Restaurant>(this.restaurantUrl, Restaurant, this.httpOptions).pipe( // realiza una solicitud HTTP POST al servidor usando la URL de destino, Restaurant es el contenido que se enviará en el cuerpo de la solicitud
                                                                                        // se utiliza 'this.httpOptions' para configurar la solicitud.
      tap((newRestaurant: Restaurant) => console.log(`added Restaurant id=${newRestaurant.id}`)), // cada vez que se agrega un restaurante se ejecuta el tap como efecto secundario
      catchError(this.handleError<Restaurant>('addRestaurant')) //Manejo de errores
    );
  }

  deleteRestaurant(id: number): Observable<Restaurant> { // devuelve un Observable que emitirá objetos del tipo Restaurant.
                                        // elimina un restaurante y notifica cuando la operación ha sido completada.
    const url = `${this.restaurantUrl}/${id}`; // Se crea la URL
    return this.http.delete<Restaurant>(url, this.httpOptions).pipe( //  realiza una solicitud HTTP DELETE al servidor utilizando la URL construida
                                                                  // se utiliza 'this.httpOptions' para configurar la solicitud.
      tap(_ => console.log(`deleted Restaurant id=${id}`)), // cada vez que se elimine un restaurante se ejecuta el tap como efecto secundario
      catchError(this.handleError<Restaurant>('deleteRestaurant')) //Manejo de errores
    );
  }

  updateRestaurant(Restaurant: Restaurant): Observable<any> { // Devuelve un Observable que emitirá cualquier tipo de objeto
    return this.http.put(this.restaurantUrl, Restaurant, this.httpOptions).pipe( // realiza una solicitud HTTP PUT para actualizar el restaurante en el servidor.
                                                                  // Se envía el objeto 'Restaurant' en el cuerpo de la solicitud y 'this.httpOptions' para configurar la solicitud.
      tap(_ => console.log(`updated Restaurant id=${Restaurant.id}`)), // cada vez que se actualice un restaurante se ejecuta el tap como efecto secundario
      catchError(this.handleError<any>('updateRestaurant')) //Manejo de errores
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
