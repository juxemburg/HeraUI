import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor() { }

  public HandleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(
      'Something bad happened; please try again later.');
  }
}
