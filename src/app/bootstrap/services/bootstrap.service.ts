import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { configVariables } from 'assets/config/http.config';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  public AuthToken = '';

  constructor(
    private _cookieService: CookieService) { }

  public initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.setAuthToken();
      resolve();
    });
  }

  private setAuthToken() {
    if (this._cookieService.check('authCookie')) {
      configVariables.authToken
        = this._cookieService.get('authCookie');
    }

    if (this._cookieService.check('userInfo')) {
      configVariables.userInfo
        = this._cookieService.get('userInfo');
    } else {
      configVariables.userInfo = '';
    }
  }
}
