import { Injectable } from '@angular/core';
import { HttpService } from 'app/shared/services/http.service';
import { Observable } from 'rxjs';
import { LoginModel, UserInfoModel, RegisterProfesorModel } from 'app/models/autentication.models';
import { UserService } from '../../shared/services/user.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _uri = 'Account';

  constructor(
    private _http: HttpService,
    private _userService: UserService,
    private _router: Router) { }

  public Login(model: LoginModel): Observable<any> {
    return this._http
      .post<LoginModel, UserInfoModel>(`${this._uri}/Login`, model)
      .pipe(
        tap(data => this.doLogin(data))
      );
  }

  public RegisterTeacher(model: RegisterProfesorModel) {
    return this._http
      .post<RegisterProfesorModel, UserInfoModel>(
        `${this._uri}/RegisterTeacher`,
        model)
      .pipe(
        tap(data => this.doLogin(data))
      );
  }

  private doLogin(userInfo: UserInfoModel) {
    this._userService.setUserInfo(userInfo);
    this._http.token = userInfo.userToken;
    this.loginRoute(userInfo);
  }

  private loginRoute(userInfo: UserInfoModel) {
    let route = '';
    switch (userInfo.role) {
      case 'Profesor':
        route = 'dashboard/teacher/courses';
        break;
      case 'student/courses':
        route = '';
        break;
      default:
        break;
    }
    this._router.navigate([route]);
  }
}
