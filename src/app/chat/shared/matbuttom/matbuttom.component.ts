import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { CargarChatService } from '../../services/cargar-chat.service';
import { Usuarios } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-matbuttom',
  templateUrl: './matbuttom.component.html',
  styleUrls: ['./matbuttom.component.css']
})
export class MatbuttomComponent implements OnInit {

  @Input() contacto!: Usuarios;

  constructor(private favoritosSv: FavoritosService, private cargarC: CargarChatService) { }

  ngOnInit(): void {
  }

  addFavorito(contacto: Usuarios){
    contacto.fav = !contacto.fav;
    this.favoritosSv.addFavoritos(contacto);
  }

  verPerfil(contacto:Usuarios){
    this.cargarC.cargarPerfil(contacto)
  }

  messague(contacto:Usuarios){
    this.cargarC.cargar_chat(contacto);
  }

}
