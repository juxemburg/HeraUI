import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserInfoViewModel } from 'app/models/autentication.models';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.scss']
})
export class NavbarLoginComponent implements OnInit {


  private _isLoggedIn: boolean;
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(v: boolean) {
    this._isLoggedIn = v;
    if (this._isLoggedIn) {
      this.userModel = this._userService.getUserInfo();
    } else {
      this.userModel = null;
    }
  }


  public userModel: UserInfoViewModel;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = this._userService.isUserLoggedIn();
    console.log(`is logged in: ${this.isLoggedIn}`);
    this._userService.onUserLoggedIn
      .subscribe(val => this.isLoggedIn = val);
  }
}
