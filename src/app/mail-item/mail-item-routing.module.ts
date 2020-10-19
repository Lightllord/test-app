import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailItemConstructorComponent } from './mail-item-constructor/mail-item-constructor.component';
import { MailItemComponent } from './mail-item/mail-item.component';

const routes: Routes = [
  {
    path: '',
    component: MailItemComponent,
    children: [
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: MailItemConstructorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailItemRoutingModule { }
