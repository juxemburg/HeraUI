import { Injectable, EventEmitter } from '@angular/core';
import { UserInfoModel, UserInfoViewModel } from '../../models/autentication.models';
import { CookieService } from 'ngx-cookie-service';
import { configVariables } from 'assets/config/http.config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: UserInfoModel;

  public onUserLoggedIn = new EventEmitter<boolean>();

  constructor(private _cookieService: CookieService) {
    if (configVariables.userInfo) {
      this._user = JSON.parse(configVariables.userInfo);
    }
  }

  public setUserInfo(model: UserInfoModel): void {
    this._user = model;
    this._cookieService.set('userInfo', JSON.stringify(model));
    this.onUserLoggedIn.emit(true);
  }

  public getUserInfo(): UserInfoViewModel {
    return new UserInfoViewModel(this._user.username,
      this._user.role, this._user.userId);
  }

  public isUserLoggedIn(): boolean {
    return (this._user) ? true : false;
  }

  public LogOut() {
    configVariables.userInfo = null;
    this._cookieService.delete('userInfo');
    this.onUserLoggedIn.emit(false);
  }

}
