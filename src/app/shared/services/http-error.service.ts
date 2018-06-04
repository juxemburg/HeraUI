import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor() { }

  public HandleError(error: HttpErrorResponse, observable: any) {
    console.log(error);
    switch (error.status) {
      case 404:
        // do something
        break;

      default:
        break;
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
