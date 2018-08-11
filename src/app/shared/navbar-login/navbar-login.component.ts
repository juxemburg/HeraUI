import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.scss']
})
export class NavbarLoginComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.onUserLoggedIn
      .subscribe(val => this.isLoggedIn = val);
  }

}
