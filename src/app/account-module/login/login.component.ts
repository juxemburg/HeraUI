import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/autentication.models';
import { LoginService } from '../services/login.service';
import { NotificationService } from '../../shared/services/notification.service';
import { NavbarMenuService } from '../../shared/navbar-menu/navbar-menu.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;

  private _onIsLoadingSource = new Subject<boolean>();
  public onIsLoading$ = this._onIsLoadingSource.asObservable();

  public isLoading = false;

  constructor(
    private _cmpService: LoginService,
    private _notService: NotificationService,
    private _navbarMenuService: NavbarMenuService
  ) { }

  ngOnInit() {
    this.reset();
    this._navbarMenuService.setMenu([]);
    this._cmpService.logOut();
  }

  public onLogin() {
    this._onIsLoadingSource.next(true);
    this._cmpService.Login(this.model)
      .subscribe(
        () => {
          this._notService.showNotification('Login exitoso', 'success');
        },
        err => {
          this._onIsLoadingSource.next(false);
          this._notService.showError('Login fallido');
          console.error(err);
        });
  }


  private reset() {
    this.model = new LoginModel('', '', true);
  }

}
