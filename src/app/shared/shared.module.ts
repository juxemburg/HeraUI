import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'app/shared/services/http.service';
import { HttpErrorService } from 'app/shared/services/http-error.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { RequiredInputComponent } from 'app/shared/required-input/required-input.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from 'app/shared/loading/loading.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';
import { NavbarPanelComponent } from 'app/shared/navbar-panel/navbar-panel.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RequiredInputComponent,
    LoadingComponent,
    FooterComponent,
    NavbarComponent,
    NavbarLoginComponent,
    NavbarPanelComponent,
    NotFoundComponent,
    SidebarComponent
  ],
  exports: [
    FormsModule,
    RouterModule,
    RequiredInputComponent,
    LoadingComponent,
    FooterComponent,
    NavbarComponent,
    NavbarPanelComponent,
    NotFoundComponent,
    SidebarComponent
  ],
  providers: [
    HttpService,
    HttpErrorService,
    NotificationService
  ]
})
export class SharedModule { }
