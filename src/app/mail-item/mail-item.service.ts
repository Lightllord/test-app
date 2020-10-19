import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MailItemService {
  _item$ = new BehaviorSubject<any>(null);
  item$ = this._item$.asObservable();
  get item(): any {
    return this._item$.getValue();
  }

  constructor() {
  }

  createNew(): any {
    const newItem = {
      type: 'draft'
    };
    this._item$.next(newItem);
    return newItem;
  }
}
