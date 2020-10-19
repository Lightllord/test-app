import { Injectable } from '@angular/core';
import { IMenuItem } from './shared/menu/menu.component';

@Injectable()
export class MailsListService {
  menu: IMenuItem[] = [
    {
      name: 'Отправлены',
      path: ['list', 'sent'],
    },
    {
      name: 'Черновики',
      path: ['list', 'draft'],
    },
    {
      name: 'Запланированы',
      disabled: true,
    },
  ];

  constructor() { }
}
