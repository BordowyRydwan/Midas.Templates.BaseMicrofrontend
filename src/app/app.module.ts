import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from "@angular/material/table";
import { MessageModule } from "./services/message/message.module";
import { CookieModule } from "./services/cookie/cookie.module";
import { API_BASE_URL } from "./services/message/message.service";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatTableModule,
      MessageModule,
      CookieModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
    ],
  providers: [{
    provide: API_BASE_URL, useValue: environment.API_BASE_URL
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
