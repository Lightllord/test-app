import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third-step-sending',
  templateUrl: './third-step-sending.component.html',
  styleUrls: ['./third-step-sending.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdStepSendingComponent {
  @Input() control: FormControl;
  @Input() disabled = false;
  @Output() saveSent = new EventEmitter<any>();
  socials2 = [
    'Уведомление о событии',
  ];
  mock = this.socials2[0];
  times = [
    'Отправить сейчас',
    'Запланированное время',
  ];
  timeSelected = this.times[0];

  constructor() {
  }
}
