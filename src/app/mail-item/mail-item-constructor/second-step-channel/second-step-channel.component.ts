import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-second-step-channel',
  templateUrl: './second-step-channel.component.html',
  styleUrls: ['./second-step-channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondStepChannelComponent {
  @Input() control: FormControl;
  socials = [
    'Facebook',
    'Одноклассники',
  ];
  socials2 = [
    'Всем этим правилам',
  ];
  mock = this.socials2[0];

  constructor() {
  }
}
