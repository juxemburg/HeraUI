import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';

import { Observable } from 'rxjs/internal/Observable';
import { RegisterProfesorModel } from 'app/models/autentication.models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _uri = 'Account';

  constructor(private _httpService: HttpService) { }

  public RegisterProfesor(model: RegisterProfesorModel): Observable<any> {
    return this._httpService
      .post<RegisterProfesorModel, any>(`${this._uri}/RegisterProfesor`, model);
  }
}
