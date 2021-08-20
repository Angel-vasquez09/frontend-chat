import { EventEmitter, Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CargarChatService {

  cargar_chat_user = new EventEmitter<Usuarios>();
  cargar_perfil    = new EventEmitter<Usuarios>();

  constructor() { }


  cargar_chat = (contacto:Usuarios) => {
    this.cargar_chat_user.emit(contacto);
  }

  cargarPerfil(perfil:Usuarios){
    this.cargar_perfil.emit(perfil);
  }

}
