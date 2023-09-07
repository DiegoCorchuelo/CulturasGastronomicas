import { Injectable } from '@angular/core'; // decorador se usa para indicar que una clase es un servicio que puede ser inyectado en otros componentes o servicios.
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Culture } from './culture';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  private culturesUrl = 'api/cultures';  // URL to web api

  // Configuración de encabezados HTTP
  httpOptions = {                     // forma de comunicar al servidor que la solicitud contiene datos en formato JSON
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // recibimos una instancia para utilizar el servicio HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) { }

  getCultures(): Observable<Culture[]> { // devuelve un Observable que emitirá arrays de objetos del tipo Culture.
    return this.http.get<Culture[]>(this.culturesUrl).pipe( // se conecta por metodo get a la URL
      tap(_ => console.log('fetched cultures')), // cada vez que el observable emite datos o la solicitud es exitosa se ejecuta el tap como efecto secundario
      catchError(this.handleError<Culture[]>('getCultures', [])) //Manejo de errores
    );
  }

  getCulture(id: number): Observable<Culture> { // devuelve un Observable que emitirá objetos del tipo Restaurant.
    const url = `${this.culturesUrl}/${id}`;
    return this.http.get<Culture>(url).pipe( // se conecta por metodo get a la URL
      tap(_ => console.log(`fetched culture id=${id}`)), // cada vez que el observable emite datos o la solicitud es exitosa se ejecuta el tap como efecto secundario
      catchError(this.handleError<Culture>(`getCulture id=${id}`)) //Manejo de errores
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
