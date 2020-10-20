import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServerService } from '../../server.service';
import { MailItemService } from '../mail-item.service';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss'],
})
export class MailItemComponent implements OnInit, OnDestroy {
  unsubscriber$ = new Subject<boolean>();
  item: any;
  formValue: any;

  constructor(private router: Router, private fb: FormBuilder, private mailItemService: MailItemService, private server: ServerService) {
  }

  ngOnInit(): void {
    this.mailItemService.item$.pipe(
      takeUntil(this.unsubscriber$),
    ).subscribe(res => {
      this.item = res;
    });
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
  }

  saveDraft(): void {
    this.server.saveDraft(this.formValue);
    this.router.navigate(['list', 'draft']);
  }

  saveSent(obj: any): void {
    this.server.saveSent(obj);
    this.router.navigate(['list', 'sent']);
  }

  changeItem(item): void {
    this.formValue = item;
  }
}
