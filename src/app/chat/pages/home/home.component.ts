import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegmentGroup, UrlTree } from '@angular/router';
import { SockectChatService } from '../../services/sockect-chat.service';
import { CargarChatService } from '../../services/cargar-chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  active: boolean = true;
  friendChat: any;

  constructor(private socketSv: SockectChatService, private cargarC: CargarChatService) { }

  ngOnInit(): void {
    this.cargarPerfil();
    this.cargarChat();
  }

  cargarChat(){
    this.cargarC.cargar_chat_user.subscribe(resp => {
      this.active = false;
      this.friendChat = resp;
      console.log(resp);
    })
  }

  cargarPerfil(){
    this.cargarC.cargar_perfil.subscribe(resp => {
      this.active = true; // Mostrar el chat de conversacion de un amigo especifico
      console.log(resp);
    })
  }

  regresar = (regresar: boolean) => {
    this.active = true; // Mostrar el tabs de conversacion, favoritos, amigos
  }


  emitir = () => {
    this.socketSv.emiter('Hola servidor');
  }

}
