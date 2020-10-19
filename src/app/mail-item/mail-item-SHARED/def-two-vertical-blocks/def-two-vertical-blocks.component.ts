import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DefLeftBlockDirective } from './def-left-block.directive';
import { DefRightBlockDirective } from './def-right-block.directive';

@Component({
  selector: 'app-def-two-vertical-blocks',
  templateUrl: './def-two-vertical-blocks.component.html',
  styleUrls: ['./def-two-vertical-blocks.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DefTwoVerticalBlocksComponent implements OnInit {
  @HostBinding('class') hostClass = 'def-two-vertical-blocks';
  @Input() class: string;
  @ContentChild(DefLeftBlockDirective, { read: TemplateRef }) leftBlock;
  @ContentChild(DefRightBlockDirective, { read: TemplateRef }) rightBlock;

  constructor() {
  }

  ngOnInit(): void {
    if (this.class) {
      if (!this.class.includes('def-two-vertical-blocks')) {
        this.hostClass = 'def-two-vertical-blocks ' + this.class;
      } else {
        this.hostClass = this.class;
      }
    }
  }

}
