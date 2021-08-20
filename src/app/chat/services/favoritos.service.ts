import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Usuarios } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  users_favoritos: Usuarios[] = [];

  get getFavoritos(){
    return JSON.parse(localStorage.getItem("favoritos")!);
  }

  constructor() {

  }





  async addFavoritos(contacto: Usuarios){
    if(contacto){
      const getFavoritos: Usuarios[] = JSON.parse(localStorage.getItem('favoritos')!);
      let existe = false;

      if(getFavoritos !== null){
        getFavoritos.forEach((resp: Usuarios) => {
          if (resp.id == contacto.id) {
            existe = true;
          }
        });
      }

      this.users_favoritos = []; // Vaciamos arreglo para no guardar arreglos sobre arreglos

      if(existe){
        // Si existe lo eliminamos de favoritos
        const nuevos = getFavoritos.filter((res:Usuarios) => res.id !== contacto.id);
        this.users_favoritos.push(...nuevos);
      }else{
        contacto.fav = true;
        this.users_favoritos.push(contacto);
        if(getFavoritos !== null){
          this.users_favoritos.push(...getFavoritos);
        }
      }

      localStorage.setItem('favoritos', JSON.stringify(this.users_favoritos));

    }
  }
}
