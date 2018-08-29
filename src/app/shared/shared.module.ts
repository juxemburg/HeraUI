import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { HttpErrorService } from './services/http-error.service';
import { NotificationService } from './services/notification.service';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarPanelComponent } from './navbar-panel/navbar-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { RouterModule } from '@angular/router';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { IsEstudianteRoleGuardService } from './services/guards/is-estudiante-role-guard.service';
import { IsProfesorRoleGuardService } from './services/guards/is-profesor-role-guard.service';
import { IsAuthenticatedGuardService } from './services/guards/is-authenticated-guard.service';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import { AutocompleteListComponent } from './autocomplete-list/autocomplete-list.component';
import { IconsModule } from './icons-module/icons.module';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FormsModule,
    JWBootstrapSwitchModule,
    HttpClientModule,
    RouterModule,
    IconsModule
  ],
  declarations: [
    LoadingComponent,
    FooterComponent,
    NavbarComponent,
    NavbarLoginComponent,
    NavbarPanelComponent,
    NotFoundComponent,
    SidebarComponent,
    AutocompleteInputComponent,
    AutocompleteListComponent,
    NavbarMenuComponent
  ],
  exports: [
    FormsModule,
    RouterModule,
    JWBootstrapSwitchModule,
    LoadingComponent,
    FooterComponent,
    NavbarComponent,
    NavbarPanelComponent,
    NotFoundComponent,
    SidebarComponent,
    AutocompleteInputComponent,
    IconsModule
  ],
  providers: [
    HttpErrorService,
    HttpService,
    NotificationService,
    IsAuthenticatedGuardService,
    IsEstudianteRoleGuardService,
    IsProfesorRoleGuardService
  ]
})
export class SharedModule { }
