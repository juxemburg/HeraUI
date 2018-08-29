import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuRoute } from '../models/shared.models';

@Injectable({
  providedIn: 'root'
})
export class NavbarMenuService {

  private _model: MenuRoute[] = [];
  public get model(): MenuRoute[] {
    return this._model;
  }
  public set model(val: MenuRoute[]) {
    this._model = val;
    this._onMenuChangedSource.next(this.model);
  }

  private _onMenuChangedSource = new Subject<MenuRoute[]>();
  public onMenuChanged$ = this._onMenuChangedSource.asObservable();

  constructor() { }

  public setMenu(menu: MenuRoute[]) {
    this.model = menu;
  }
}
