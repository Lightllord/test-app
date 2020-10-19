import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.scss']
})
export class MailsListComponent implements OnInit {
  @Input() list: any[];
  displayedColumns = ['select', 'name', 'status', 'count', 'watches', 'date', 'account'];

  constructor() { }

  ngOnInit(): void {
  }

}
