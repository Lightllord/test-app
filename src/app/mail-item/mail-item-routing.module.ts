import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailItemComponent } from './mail-item/mail-item.component';

const routes: Routes = [
  {
    path: '',
    component: MailItemComponent,
    children: [
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailItemRoutingModule {
}
