import { Component, OnInit } from '@angular/core';
import { MailsListService } from '../mails-list.service';
import { IMenuItem } from '../shared/menu/menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
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

  constructor(private mailsListService: MailsListService) {
    this.menu = this.mailsListService.menu;
  }

  ngOnInit(): void {
  }

}
