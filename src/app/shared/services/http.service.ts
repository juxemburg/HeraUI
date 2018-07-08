import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'assets/config/http.config';
import { HttpErrorService } from './http-error.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _baseUri: string = baseUrl;
  private _authToken: string;
  public set token(value: string) {
    this._authToken = value;
  }

  constructor(
    private _http: HttpClient,
    private _httpError: HttpErrorService
  ) { }

  public get<T>(subUri: string,
    params: Map<string, string> = null): Observable<T> {

    return this._http
      .get<T>(this.getFullUrl(subUri, params), { headers: this.getHeaders() })
      .pipe(
        retry(3),
        catchError(this._httpError.HandleError())
      );
  }

  public post<T, U>(subUri: string, data: T,
    params: Map<string, string> = null): Observable<U> {
    return this._http
      .post<U>(this.getFullUrl(subUri, params), data, { headers: this.getHeaders() })
      .pipe(
        retry(3),
        catchError(this._httpError.HandleError())
      );
  }

  private getFullUrl(
    subUri: string,
    params: Map<string, string> = null): string {
    let paramText = '';
    if (params) {
      params.forEach((value, key, map) => {
        paramText += `${key}=${value}`;
      });
      return `${this._baseUri}/${subUri}?${paramText}`;
    }
    return `${this._baseUri}/${subUri}`;
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (this._authToken) {
      headers = headers.set('Authorization', `Bearer ${this._authToken}`);
    }
    return headers;
  }

}
