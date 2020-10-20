import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mail-item-constructor',
  templateUrl: './mail-item-constructor.component.html',
  styleUrls: ['./mail-item-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true },
  }],
})
export class MailItemConstructorComponent implements OnChanges, OnDestroy {
  @Input() item: any;
  @Output() itemChanged = new EventEmitter<any>();
  @Output() saveSent = new EventEmitter<any>();
  form = this.fb.group({
    name: ['', Validators.required],
    platform: ['', Validators.required],
    description: ['', Validators.required],
  }, { updateOn: 'blur' });
  unsubscriber$ = new Subject<boolean>();

  get fName(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get fPlatform(): FormControl {
    return this.form.get('platform') as FormControl;
  }

  get fDescription(): FormControl {
    return this.form.get('description') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.form.valueChanges.pipe(
      takeUntil(this.unsubscriber$)
    ).subscribe(res => {
      this.itemChanged.emit(res);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.reset(this.item || {});
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
  }

  onSaveSent(): void {
    this.saveSent.emit(this.form.value);
  }
}
