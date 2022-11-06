import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MessageApiService } from "./message.service";

@NgModule({
  imports: [ HttpClientModule ],
  providers: [ MessageApiService ]

})
export class MessageModule { }
