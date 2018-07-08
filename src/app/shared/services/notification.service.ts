import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toastr: ToastrService) { }

  public showError(message: string) {
    this.showNotification(message, 'error');
  }

  public showSuccess(message: string) {
    this.showNotification(message, 'success');
  }

  showNotification(message: string, color: string, from = 'top', align = 'right') {

    switch (color) {
      case 'info':
        this._toastr.info(
          `<span class="now-ui-icons ui-1_bell-53"></span>
           ${message}
           `,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-info alert-with-icon',
            positionClass: 'toast-' + from + '-' + align
          });
        break;
      case 'success':
        this._toastr.success(
          `<span class="now-ui-icons ui-1_bell-53"></span>
           ${message}
           `,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-success alert-with-icon',
            positionClass: 'toast-' + from + '-' + align
          }
        );
        break;
      case 'warning':
        this._toastr.warning(
          `<span class="now-ui-icons ui-1_bell-53"></span>
           ${message}
           `,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-warning alert-with-icon',
            positionClass: 'toast-' + from + '-' + align
          });
        break;
      case 'error':
        this._toastr.error(
          `<span class="now-ui-icons ui-1_bell-53"></span>
           ${message}
           `,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-error alert-with-icon',
            positionClass: 'toast-' + from + '-' + align
          });
        break;
      default:
        break;
    }
  }
}
