import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  default: any[] = [
    {
      id: 1,
      name: 'name yeahyeah',
      description: 'Тестовая рассылка для Димона',
      platform: 'Facebook',
      status: 'Активна',
      count: 240,
      watches: 120,
      date: new Date('01-01-2020'),
      account: 'Leroy Jenkins',
      type: 'sent',
    },
    {
      id: 2,
      name: 'name yeahyeah',
      description: 'oulyaya',
      platform: 'Faceboo',
      status: 'Активна',
      count: 240,
      watches: 120,
      date: new Date('03-03-2020'),
      account: 'Leroy Jenkins',
      type: 'sent',
    },
    {
      id: 3,
      name: 'name yeahyeah',
      description: 'Тестовая рассылка для Димона',
      platform: 'Facebook',
      status: 'Активна',
      count: 240,
      watches: 120,
      date: new Date('01-01-2020'),
      account: 'Leroy Jenkins',
      type: 'sent',
    },
    {
      id: 4,
      name: 'name yeahyeah',
      description: 'Тестовая рассылка для Димона',
      platform: 'Facebook',
      status: 'Активна',
      count: 240,
      watches: 120,
      date: new Date('01-01-2020'),
      account: 'Leroy Jenkins',
      type: 'sent',
    },
    {
      id: 5,
      name: 'name yeahyeah',
      description: 'Тестовая рассылка для Димона',
      platform: 'Facebook',
      status: 'Активна',
      count: 240,
      watches: 120,
      date: new Date('01-01-2020'),
      account: 'Leroy Jenkins',
      type: 'sent',
    },
    {
      id: 6,
      name: 'name yeahyeah',
      description: 'Тестовая рассылка для Димона',
      platform: 'Facebook',
      status: 'Активна',
      count: 240,
      watches: 120,
      date: new Date('01-01-2020'),
      account: 'Leroy Jenkins',
      type: 'sent',
    },
  ];
  list: any[];
  maxId: number;

  constructor() {
  }

  getMails(type: 'sent' | 'draft' | string): any[] {
    this.loadListFromStorage();
    return this.list.filter(el => el.type === type);
  }

  updateMails(arr: any[]): void {
    try {
      localStorage.setItem('mails', JSON.stringify(arr));
    } catch (e) {
      console.error('Local Storage Error');
    }
  }

  resetStorage = (): any[] => {
    this.updateMails(this.default);
    return this.default;
  };

  loadListFromStorage(): void {
    const setId = () => {
      this.list.forEach(el => this.maxId = (el.id >= this.maxId) ? el.id++ : this.maxId);
    };
    try {
      const mailsString = localStorage.getItem('mails');
      if (!mailsString) {
        this.list = this.resetStorage();
      } else {
        this.list = JSON.parse(mailsString);
      }
      setId();
    } catch (e) {
      this.list = this.resetStorage();
      setId();
    }
  }
}
