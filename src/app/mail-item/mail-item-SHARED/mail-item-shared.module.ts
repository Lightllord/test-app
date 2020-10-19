import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DefLeftBlockDirective } from './def-two-vertical-blocks/def-left-block.directive';
import { DefRightBlockDirective } from './def-two-vertical-blocks/def-right-block.directive';
import { DefTwoVerticalBlocksComponent } from './def-two-vertical-blocks/def-two-vertical-blocks.component';


@NgModule({
  declarations: [
    DefTwoVerticalBlocksComponent,
    DefLeftBlockDirective,
    DefRightBlockDirective,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DefTwoVerticalBlocksComponent,
    DefRightBlockDirective,
    DefLeftBlockDirective,
  ],
})
export class MailItemSharedModule {
}
