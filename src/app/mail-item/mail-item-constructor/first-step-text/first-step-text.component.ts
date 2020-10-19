import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-step-text',
  templateUrl: './first-step-text.component.html',
  styleUrls: ['./first-step-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstStepTextComponent {
  @Input() control: FormControl;

  constructor() {
  }
}
