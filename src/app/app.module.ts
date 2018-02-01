import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginService } from './login.service';
import { ChatService } from './chat/chat.service';
import { ServerService } from './chat/server.service';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ChatHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, ChatService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
