import { Component, OnInit, ElementRef, AfterViewChecked, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { ChatService } from './chat.service';
import { ServerService } from './server.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked
{
  @ViewChild('scrollElement') scrollElement: ElementRef;

  message: string = '';
  messageList: Object[] = [];

  constructor
  (
    private loginService: LoginService,
    private chatService: ChatService,
    private serverService: ServerService
  ) 
  { }

  scrollToBottom(el: ElementRef) {
     let div = el.nativeElement as HTMLDivElement;
    div.scrollTop = div.scrollHeight;
   }

  ngOnInit() 
  {
    this.serverService.server.on('messages', (messages) => {
      this.messageList = messages;
    });

    this.serverService.server.on('message', (message) => {
      this.messageList.push(message);
    });

    this.serverService.server.on('join', (user) => {
      console.log(user);
    });
  }
  
  ngAfterViewChecked() {
    this.scrollToBottom(this.scrollElement);
  }

  public sendMessage(): void {
    let message = {
      message: this.message,
      time: new Date(),
      author: this.loginService.name
    }
    this.serverService.server.emit('message', message);
    this.message = '';
    
  }

  getKeyPress(e) {
    // se digitou apenas Enter, manda a mensagem, se apertou Shift também, não faz nada diferente, ou seja, apenas pula a linha
    if (e.code == "Enter" && !e.shiftKey) {
      this.sendMessage();
      e.preventDefault();
    }
  }
}
