import { Injectable } from '@angular/core';
import { UserInfoModel } from '../../models/autentication.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: UserInfoModel;

  constructor() { }

  public setUserInfo(model: UserInfoModel): void {
    this._user = model;
  }
}
