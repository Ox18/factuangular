import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNaviBarComponent } from './components/side-navi-bar/side-navi-bar.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ComprobantePageComponent } from './pages/comprobante-page/comprobante-page.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideNaviBarComponent,
    UserPageComponent,
    ComprobantePageComponent,
    AddUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
