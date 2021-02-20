import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"


import { AppComponent } from './app.component';
import {ParticipantComponent} from "./components/participant/participant.component";
import { ParticipantsComponent } from './components/participants/participants.component'

@NgModule({
  declarations: [
    AppComponent,ParticipantComponent, ParticipantsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
