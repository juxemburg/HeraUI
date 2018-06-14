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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarLoginComponent,
    NavbarPanelComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarPanelComponent,
    SidebarComponent
  ],
  providers: [NavbarPanelService]
})
export class ComponentsModule { }
