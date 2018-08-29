import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'assets/animations/fade.animation';
import { NavbarMenuService } from '../../../shared/navbar-menu/navbar-menu.service';
import { MenuRoute } from '../../../shared/models/shared.models';


const routes: MenuRoute[] = [
  new MenuRoute('/student/courses', 'Mis cursos', 'book'),
  new MenuRoute('/student/courses-search', 'Búsqueda de cursos', 'search')
];

@Component({
  selector: 'app-regular-layout',
  templateUrl: './regular-layout.component.html',
  styleUrls: ['./regular-layout.component.scss'],
  animations: [fadeAnimation]
})
export class RegularLayoutComponent implements OnInit {

  constructor(private _navbarMenuService: NavbarMenuService) { }

  ngOnInit() {
    this._navbarMenuService.setMenu(routes);
  }


}
