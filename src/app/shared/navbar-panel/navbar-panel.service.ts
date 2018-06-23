import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarPanelService {

  public onTtitleChanged = new EventEmitter<string>();

  constructor() { }

  public setTitle(title: string) {
    this.onTtitleChanged.emit(title);
  }
}
