import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'dist/ngx-bs-modal';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from "./confirm/confirm.component";
import { PromptComponent } from "./prompt/prompt.component";
import { ParentDialogComponent } from "./parent-dialog/parent-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ConfirmComponent,
    PromptComponent,
    ParentDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapModalModule
    // BootstrapModalModule.forRoot({container: document.body}),

  ],
  entryComponents: [
    AlertComponent,
    ConfirmComponent,
    PromptComponent,
    ParentDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
