import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CargarChatService } from '../../services/cargar-chat.service';
import { Usuarios } from '../../interfaces/users.interfaces';
import { SockectChatService } from '../../services/sockect-chat.service';

@Component({
  selector: 'app-list-conversations',
  templateUrl: './list-conversations.component.html',
  styleUrls: ['./list-conversations.component.css']
})
export class ListConversationsComponent implements OnInit {

  @Output() activar = new EventEmitter<boolean>();
  users_conversation: Usuarios[] = [];

  get conversation(){
    return this.sockectC.conversation;
  }

  constructor(private cargarC: CargarChatService, private sockectC: SockectChatService) { }

  ngOnInit(): void {

    this.cargarConversations()

  }

  mostrar = () => {
    //this.cargarC.cargar_chat();
  }

  cargarConversations(){
    this.users_conversation = [];
    this.users_conversation.push(...this.conversation);
    this.sockectC.usersConversation().then(resp => {
      this.users_conversation.push(...resp);
    })
  }



}
