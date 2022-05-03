import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobantePageComponent } from './pages/comprobante-page/comprobante-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
  },
  {
    path: 'comprobantes',
    component: ComprobantePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
