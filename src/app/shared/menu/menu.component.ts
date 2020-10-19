import { Component, Input, OnInit } from '@angular/core';

export interface IMenuItem {
  name: string;
  path?: any;
  disabled?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuTitle: string;
  @Input() menuItemList: IMenuItem[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
