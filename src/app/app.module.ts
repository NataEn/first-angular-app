import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ParticipantComponent} from "./participant/participant.component";
import { ParticipantsComponent } from './participants/participants.component'

@NgModule({
  declarations: [
    AppComponent,ParticipantComponent, ParticipantsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
