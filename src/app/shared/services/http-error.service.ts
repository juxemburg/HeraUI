import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private _router: Router) { }

  public HandleError(error: HttpErrorResponse, observable: any) {
    console.log(error);
    switch (error.status) {
      case 401: // Unauthorized
        this._router.navigate(['']);
        break;
      case 401: // Forbidden
        this._router.navigate(['']);
        break;
      default:
        break;
    }
    return throwError(error.error);
  }
}
