import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CurrentOffer} from "../model/current-offer";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CurrentOffersService {
  //Students Endpoint
  basePath = 'http://localhost:3000/currents-offers';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend return code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error(`Something happened with request, please try again later`));
  }

  getCurrentsOffers() {
    return this.http.get<CurrentOffer[]>(this.basePath, this.httpOptions)
  }
}
