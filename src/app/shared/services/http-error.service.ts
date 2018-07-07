import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private _router: Router) { }

  public HandleError(error: HttpErrorResponse, observable: any) {
    console.log(error.status);
    switch (error.status) {
      case 401: // Unauthorized

        // tslint:disable-next-line:no-debugger
        debugger;
        this._router.navigate(['/account/login']);
        break;
      case 403: // Forbidden
        this._router.navigate(['account/login']);
        break;
      default:
        break;
    }
    return _throw(error.error);
  }
}
