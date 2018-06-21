import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { NavbarPanelComponent } from './navbar-panel/navbar-panel.component';
import { NavbarPanelService } from './navbar-panel/navbar-panel.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './login/login.service';
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component';
import { TeacherCoursesListComponent } from './teacher-courses-list/teacher-courses-list.component';
import { TeacherCoursesSearchComponent } from './teacher-courses-search/teacher-courses-search.component';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { IsAuthenticatedGuardService } from './services/guards/is-authenticated-guard.service';
import { IsInRoleGuardService } from './services/guards/is-in-role-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarLoginComponent,
    NavbarPanelComponent,
    LoginComponent,
    TeacherCoursesComponent,
    TeacherCoursesListComponent,
    TeacherCoursesSearchComponent,
    PortalCardComponent,
    NotFoundComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarPanelComponent,
    SidebarComponent,
    PortalCardComponent,
    LoginComponent,
    NotFoundComponent
  ],
  providers: [
    NavbarPanelService,
    LoginService,
    IsAuthenticatedGuardService,
    IsInRoleGuardService
  ]
})
export class ComponentsModule { }
