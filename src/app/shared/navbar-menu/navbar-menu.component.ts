import { Component, OnInit } from '@angular/core';
import { MenuRoute } from '../models/shared.models';
import { NavbarMenuService } from './navbar-menu.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  public model: MenuRoute[] = [];

  constructor(
    private _menuService: NavbarMenuService
  ) { }

  ngOnInit() {
    this.model = this._menuService.model;

    this._menuService.onMenuChanged$
      .subscribe(val => this.model = val);
  }

}
