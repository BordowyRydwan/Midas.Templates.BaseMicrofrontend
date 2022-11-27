import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageModule } from "./services/message/message.module";
import { CookieModule } from "./services/cookie/cookie.module";
import { API_BASE_URL } from "./services/message/message.service";
import { environment } from "../environments/environment";
import { MaterialModule } from "./modules/material/material.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MessageModule,
      CookieModule,
      MaterialModule
    ],
  providers: [{
    provide: API_BASE_URL, useValue: environment.API_BASE_URL
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
