import { Injectable, EventEmitter } from '@angular/core';
import { UserInfoModel, UserInfoViewModel } from '../../models/autentication.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: UserInfoModel;

  public onUserLoggedIn = new EventEmitter<boolean>();

  constructor() { }

  public setUserInfo(model: UserInfoModel): void {
    this._user = model;
    this.onUserLoggedIn.emit(true);
  }

  public getUserInfo(): UserInfoViewModel {
    return this._user.map();
  }

  public isUserLoggedIn(): boolean {
    return (this._user) ? true : false;
  }

  public LogOut() {
    this.onUserLoggedIn.emit(false);
  }

}
