import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailsListContainerComponent } from './mails-list-container/mails-list-container.component';
import { MailsListTypeGuardService } from './mails-list-type-guard.service';
import { MailsListService } from './mails-list.service';
import { MainComponent } from './main/main.component';
import { ServerService } from './server.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MailsListContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    MailsListService,
    ServerService,
    MailsListTypeGuardService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
