import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailsListContainerComponent } from './mails-list-container/mails-list-container.component';
import { MailsListTypeGuardService } from './mails-list-type-guard.service';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'sent',
          },
          {
            path: ':type', // sent, draft
            component: MailsListContainerComponent,
            canActivate: [
              MailsListTypeGuardService,
            ],
          },
        ],
      },
      {
        path: 'item',
        loadChildren: () => import('./mail-item/mail-item.module').then(m => m.MailItemModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
