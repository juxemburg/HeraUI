import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../../account-module/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuardService implements CanActivate {

  constructor(private _loginService: LoginService) { }

  public canActivate(): Observable<boolean> {
    return this._loginService.IsAuthenticated();
  }
}
