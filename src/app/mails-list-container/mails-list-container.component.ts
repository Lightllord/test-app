import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MailsListService } from '../mails-list.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-mails-list-container',
  templateUrl: './mails-list-container.component.html',
  styleUrls: ['./mails-list-container.component.scss'],
})
export class MailsListContainerComponent implements OnInit, OnDestroy {
  unsubscriber$ = new Subject<boolean>();
  list: any[] = [];
  type: string;

  constructor(
    private mailsService: MailsListService,
    private server: ServerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.unsubscriber$),
    ).subscribe(pMap => {
      this.type = pMap.get('type');
      this.list = this.server.getMails(this.type);
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
  }

  newItem(): void {
    this.router.navigate(['item', 'new']);
  }
}
