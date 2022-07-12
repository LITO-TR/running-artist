import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Offer} from "../model/offer";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  //Students Endpoint
  basePath ='http://localhost:3000/offers';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend return code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError( () => new Error(`Something happened with request, please try again later`));
  }


  getAll(): Observable<Offer> {
    return this.http.get<Offer>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  update(id: any, item: any): Observable<Offer> {
    return this.http.put<Offer>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  create(item: any): Observable<Offer> {
    return this.http.post<Offer>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }






}
