import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , NgForm} from "@angular/forms";
import { AppComponent } from './app.component';
import {TrackBy} from "./track-by/track-by.component";
import {FormComponent} from "./form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    TrackBy,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
