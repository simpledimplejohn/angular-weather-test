import { WeatherDTO } from './../models/weather';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0e404be37dec02bb059c6ae8cc511551`;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeather(): Observable<WeatherDTO>{

    return this.http.get<WeatherDTO>(url)
      .pipe(catchError(this.handleError));

  }

  private handleError(httpError: HttpErrorResponse) {
    if(httpError.error instanceof ErrorEvent) {
      console.log('An error occured: ', httpError.error.message);
    } else {
      console.error(`
      Backend returned code ${httpError.status},
      body was: ${httpError.error}
      `);
    }
    //this is an observable we can return in place of the user we would have had from RxJS
    return throwError(() => new Error('something really bad happened--try again later'));
  }
}


