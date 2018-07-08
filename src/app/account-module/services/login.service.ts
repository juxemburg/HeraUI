import { Injectable } from '@angular/core';
import { HttpService } from 'app/shared/services/http.service';
import { Observable } from 'rxjs';
import {
  LoginModel,
  UserInfoModel,
  RegisterProfesorModel,
  StudentRegistrationMetadata,
  RegisterStudentModel
} from 'app/models/autentication.models';
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

  public RegisterTeacher(model: RegisterProfesorModel): Observable<UserInfoModel> {
    return this._http
      .post<RegisterProfesorModel, UserInfoModel>(
        `${this._uri}/RegisterTeacher`,
        model)
      .pipe(
        tap(data => this.doLogin(data))
      );
  }

  public RegisterStudent(model: RegisterStudentModel): Observable<UserInfoModel> {
    return this._http
      .post<RegisterStudentModel, UserInfoModel>(
        `${this._uri}/RegisterStudent`,
        model)
      .pipe(
        tap(data => this.doLogin(data))
      );
  }

  public GetStudentRegistrationMetadata(): Observable<StudentRegistrationMetadata> {
    return this._http.get<StudentRegistrationMetadata>(
      `${this._uri}/GetStudentRegistrationMetadata`);
  }

  public IsAuthenticated(): Observable<boolean> {
    return this._http.get(`${this._uri}/IsAuthenticated`);
  }

  public IsInRole(role: string): Observable<boolean> {
    return this._http.get(`${this._uri}/IsInRole/${role}`);
  }

  private doLogin(userInfo: UserInfoModel) {
    this._userService.setUserInfo(userInfo);
    this._http.token = userInfo.token;
    this.loginRoute(userInfo);
  }

  private loginRoute(userInfo: UserInfoModel) {
    let route = '';
    switch (userInfo.role) {
      case 'Profesor':
        route = 'dashboard/teacher/courses';
        break;
      case 'Estudiante':
        route = '/student/courses';
        break;
      default:
        break;
    }
    this._router.navigate([route]);
  }
}
