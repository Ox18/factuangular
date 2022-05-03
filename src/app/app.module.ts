import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNaviBarComponent } from './components/side-navi-bar/side-navi-bar.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ComprobantePageComponent } from './pages/comprobante-page/comprobante-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNaviBarComponent,
    UserPageComponent,
    ComprobantePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
