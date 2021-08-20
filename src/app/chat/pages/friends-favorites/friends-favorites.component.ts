import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { Usuarios } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-friends-favorites',
  templateUrl: './friends-favorites.component.html',
  styleUrls: ['./friends-favorites.component.css']
})
export class FriendsFavoritesComponent implements OnInit {

  contactos: Usuarios[] = [];

  constructor(private favoritosSv: FavoritosService) { }

  get favoritos(){
    return this.contactos = this.favoritosSv.getFavoritos;
  }

  ngOnInit(): void {
    this.favoritos;
  }

}
