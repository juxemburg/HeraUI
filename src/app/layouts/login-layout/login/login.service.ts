import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/autentication.models';
import { HttpService } from '../../../shared/services/http.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _uri = 'Account';

  constructor(private _http: HttpService) { }

  public Login(model: LoginModel): Observable<any> {
    return this._http.post(`${this._uri}/Login`, model);
  }
}
