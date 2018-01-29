import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit 
{
  listaMensagem: Message[] = [];
  mensagem:string = "";
  constructor() { }

  ngOnInit() { }
  addMessage()
  {
    if(this.mensagem.trim() !== '')
    {
      this.listaMensagem.push({text: this.mensagem, data: new Date()});
      this.mensagem = '';     
    }
    else
    {
      alert("Escreva uma mensagem");
      return;
    }
  }

  keyup(event)
  {
      if(event.keyCode === 13 && !event.shiftKey)
      {
          this.addMessage();
          return;
      }
  }

}

export class Message {
  text: string;
  data: Date;
}
