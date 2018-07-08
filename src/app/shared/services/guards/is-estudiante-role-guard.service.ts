import { Injectable } from '@angular/core';
import { LoginService } from '../../../account-module/services/login.service';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsEstudianteRoleGuardService implements CanActivate {

  constructor(private _authService: LoginService) { }

  public canActivate(): Observable<boolean> {
    return this._authService.IsInRole('Estudiante');
  }
}
