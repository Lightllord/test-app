import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MailsListComponent } from './mails-list/mails-list.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    MailsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule
  ],
  exports: [
    MenuComponent,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MailsListComponent,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule
  ],
})
export class SharedModule {
}
