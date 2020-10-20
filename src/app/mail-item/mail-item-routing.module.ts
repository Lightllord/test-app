import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailItemConstructorComponent } from './mail-item-constructor/mail-item-constructor.component';
import { MailItemGuardService } from './mail-item-guard.service';
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
        component: MailItemConstructorComponent,
        canActivate: [MailItemGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailItemRoutingModule { }
