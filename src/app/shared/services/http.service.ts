import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'assets/config/http.config';
import { HttpErrorService } from './http-error.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _baseUri: string = baseUrl;

  constructor(
    private _http: HttpClient,
    private _httpError: HttpErrorService
  ) { }

  public get<T>(subUri: string,
    params: Map<string, string> = null): Observable<T> {
    return this._http.get<T>(this.getFullUrl(subUri, params))
    .pipe(
      retry(3),
      catchError(this._httpError.HandleError)
    );
  }

  public post<T, U>(subUri: string, data: T,
    params: Map<string, string> = null): Observable<U> {
    return this._http
      .post<U>(this.getFullUrl(subUri, params), data)
      .pipe(
        retry(3),
        catchError(this._httpError.HandleError)
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

}
