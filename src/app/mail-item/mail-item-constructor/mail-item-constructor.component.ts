import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail-item-constructor',
  templateUrl: './mail-item-constructor.component.html',
  styleUrls: ['./mail-item-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true },
  }],
})
export class MailItemConstructorComponent implements OnChanges {
  @Input() item: any;
  form = this.fb.group({
    name: ['', Validators.required],
    platform: ['', Validators.required],
    description: ['', Validators.required],
  }, { updateOn: 'blur' });

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
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.reset(this.item || {});
  }
}
