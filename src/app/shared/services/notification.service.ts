import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toastr: ToastrService) { }

  showNotification(message: string, color: string, from = 'top', align = 'right') {



    switch (color) {
      case 'info':
        this._toastr.info(
          message,
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
          message,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-info alert-with-icon',
            positionClass: 'toast-' + from + '-' + align
          }
        );
        break;
      case 'warning':
        this._toastr.warning(
          message,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-info alert-with-icon',
            positionClass: 'toast-' + from + '-' + align
          });
        break;
      case 'error':
        this._toastr.error(
          message,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-info alert-with-icon',
            positionClass: 'toast-' + from + '-' + align
          });
        break;
      default:
        break;
    }
  }
}
