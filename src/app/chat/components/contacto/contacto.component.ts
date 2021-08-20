import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuarios } from '../../interfaces/users.interfaces';
import { FavoritosService } from '../../services/favoritos.service';
import { CargarChatService } from '../../services/cargar-chat.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input()contacto!: Usuarios;
  @Output() perfil = new EventEmitter<boolean>();

  favorito: boolean = false;

  constructor(  private cargarC: CargarChatService,
                private favoritosSv: FavoritosService) { }

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

  onClick(){
    //console.log("Hola")
  }

}
