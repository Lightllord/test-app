import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../server.service';

@Injectable()
export class MailItemService {
  _item$ = new BehaviorSubject<any>(null);
  item$ = this._item$.asObservable();
  get item(): any {
    return this._item$.getValue();
  }

  constructor(private server: ServerService) {
  }

  createNew(): any {
    const newItem = {
      type: 'draft'
    };
    this._item$.next(newItem);
    return newItem;
  }

  findAndSelect(id: number): any {
    const item = this.server.findById(id);
    if (item) {
      this._item$.next(item);
    } else {
      this.deleteItem();
    }
    console.log(item);
    return item;
  }

  deleteItem(): void {
    this._item$.next(null);
  }
}
