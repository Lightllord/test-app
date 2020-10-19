import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FirstStepTextComponent } from './mail-item-constructor/first-step-text/first-step-text.component';
import { MailItemConstructorComponent } from './mail-item-constructor/mail-item-constructor.component';
import { MailItemGuardService } from './mail-item-guard.service';

import { MailItemRoutingModule } from './mail-item-routing.module';
import { MailItemSharedModule } from './mail-item-SHARED/mail-item-shared.module';
import { MailItemService } from './mail-item.service';
import { MailItemComponent } from './mail-item/mail-item.component';
import { SecondStepChannelComponent } from './mail-item-constructor/second-step-channel/second-step-channel.component';
import { ThirdStepSendingComponent } from './mail-item-constructor/third-step-sending/third-step-sending.component';

@NgModule({
  declarations: [
    MailItemComponent,
    MailItemConstructorComponent,
    FirstStepTextComponent,
    SecondStepChannelComponent,
    ThirdStepSendingComponent
  ],
  imports: [
    CommonModule,
    MailItemRoutingModule,
    SharedModule,
    MailItemSharedModule,
  ],
  providers: [
    MailItemGuardService,
    MailItemService,
  ],
})
export class MailItemModule {
}
