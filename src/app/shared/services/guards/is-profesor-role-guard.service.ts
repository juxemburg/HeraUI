import { Injectable } from '@angular/core';
import { LoginService } from '../../../account-module/services/login.service';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsProfesorRoleGuardService implements CanActivate {

  constructor(private _authService: LoginService) { }

  public canActivate(): Observable<boolean> {
    return this._authService.IsInRole('Profesor');
  }
}
