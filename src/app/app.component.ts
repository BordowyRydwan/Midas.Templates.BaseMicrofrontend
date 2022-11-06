import { Component } from '@angular/core';
import { MessageApiService, MessageDto } from "./services/message/message.service";
import { map, Observable, tap, zip } from "rxjs";
import ComponentState from "../enums/component-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = ComponentState.LOADING
  states = ComponentState;

  messages: MessageDto[] = [];
  displayedColumns: string[] = ['content'];

  constructor(private messageApi: MessageApiService) {
    const calls = zip(this.getMessages());

    calls.subscribe({
      next: () => this.state = ComponentState.LOADED,
      error: (err: any) => {
        this.state = ComponentState.ERROR;
        console.log(err);
      }
    });
  }

  private getMessages(): Observable<MessageDto[]> {
    return this.messageApi.getAllMessages()
      .pipe(
        map(result => result.items!),
        tap(result => this.messages = result)
      )
  }
}
