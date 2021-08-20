import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuarios } from '../interfaces/users.interfaces';
import { Observable } from 'rxjs';
import { FavoritosService } from './favoritos.service';

@Injectable({
  providedIn: 'root'
})

export class SockectChatService extends Socket{

  users_paginados   : Usuarios[] = [];
  users_conversation: any[] = [];



  get users(){ //? LISTA DE USUARIOS REGISTRADOS
    return this.users_paginados;
  }

  get conversation(){ //? LISTA DE CONVERSACIONES
    return this.users_conversation;
  }

  constructor(private favoritosSv: FavoritosService) {
    super({
      url: 'http://localhost:8080',
      options: {
        query: {
          xtoken: localStorage.getItem('token')
        }
      }
    })


    this.listar_contactos();
    this.usersConversation();

  }

  listar_contactos = () => {
    return new Promise<Usuarios[]>((resolve) => {
      this.ioSocket.on("user-registrados", (payload: Usuarios[]) => {
        this.users_paginados = [];
        const mod = this.verFavoritos(payload, this.favoritosSv.getFavoritos);
        this.users_paginados.push(...mod)
        resolve(mod);
      });
    })
  }

  verFavoritos(usersBd: Usuarios[], usersStorag: Usuarios[]){
    usersBd.forEach(usersB => {
      usersStorag.forEach(usersS => {
        if((usersB.id == usersS.id)){
          usersB.fav = usersS.fav;
        }
      })
    });
    return usersBd;
  }


  //* ENVIAR MENSAJE
  enviarMsj = (data:any) => {
    this.position1(data.para);
    this.ioSocket.emit('enviar-mensaje', data);
  }

  position1 = (para:string) => {
    const user = this.users_conversation.find(user => user.para._id === para);
    const data = this.users_conversation.filter(res => res.para._id !== para);
    data.unshift(user);
    this.users_conversation = [];
    this.users_conversation.push(...data);
  }




  //* OBTENER TODOS LOS USUARIOS CON LOS QUE HE HABLADO
  usersConversation = () => {
    return new Promise<Usuarios[]>((resolve) => {
      this.ioSocket.on("users-conversation", (payload: Usuarios[]) => {
        this.users_conversation = [];
        this.users_conversation.push(...payload);
        resolve(this.users_conversation);
      });
    })
  }









  emiter = (data:any) => {
    this.ioSocket.emit('angular', data)
  }




}


