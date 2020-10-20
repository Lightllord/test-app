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
  maxId = 1;

  constructor() {
    this.loadListFromStorage();
  }

  getMails(type: 'sent' | 'draft' | string): any[] {
    return this.list.filter(el => el.type === type);
  }

  updateMails(arr: any[]): void {
    try {
      localStorage.setItem('mails', JSON.stringify(arr));
    } catch (e) {
      console.error('Local Storage Error');
    }
  }

  resetStorage(): any[] {
    this.updateMails(this.default);
    return this.default;
  }

  loadListFromStorage(): void {
    const setId = () => {
      this.list.forEach(el => this.maxId = (el.id >= this.maxId) ? el.id : this.maxId);
      this.maxId++;
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

  saveDraft(draft: any): void {
    if (draft.id) {
      const found = this.list.find(el => el.id === draft.id);
      if (found) {
        Object.assign(found, draft);
        this.updateMails(this.list);
      }
    } else {
      this.list.push({
        ...draft,
        id: this.maxId,
        status: 'Активна',
        count: 240,
        watches: 120,
        date: new Date(),
        account: 'Leroy Jenkins',
        type: 'draft',
      });
      this.updateMails(this.list);
      this.maxId++;
    }
  }

  saveSent(massage: any): void {
    if (massage.type === 'sent' && massage.id) {
      const ind = this.list.findIndex(el => el.id === massage.id);
      if (ind !== -1) {
        this.list.splice(ind, 1);
      }
    }
    this.list.push({
      ...massage,
      id: this.maxId,
      status: 'Активна',
      count: 240,
      watches: 120,
      date: new Date(),
      account: 'Leroy Jenkins',
      type: 'sent',
    });
    this.updateMails(this.list);
    this.maxId++;
  }

  findById(id: number): any {
    return this.list.find(el => el.id === id);
  }
}
