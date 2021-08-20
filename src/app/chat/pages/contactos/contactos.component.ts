import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/users.interfaces';
import { SockectChatService } from '../../services/sockect-chat.service';



@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactos: Usuarios[] = [];

  constructor(private sockectSv: SockectChatService) {

  }

  get users(){
    return this.sockectSv.users;
  }

  ngOnInit() {

    this.cargar_users();
  }

  // Cargar usuarios registrados
  cargar_users(){
    this.contactos.push(...this.users)
    this.sockectSv.listar_contactos().then(contactos => {
      this.contactos.push(...contactos);
      console.log(contactos)
    })

  }



}
