import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.scss'],
})
export class MailsListComponent implements OnInit {
  @Input() list: any[];
  @Input() selectable = false;
  @Output() rowSelected = new EventEmitter<any>();
  displayedColumns = ['select', 'name', 'status', 'count', 'watches', 'date', 'account'];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectRow(row): void {
    if (this.selectable) {
      this.rowSelected.emit(row);
    }
  }
}
