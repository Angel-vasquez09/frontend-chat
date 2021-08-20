import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../../interfaces/users.interfaces';
import { SockectChatService } from '../../services/sockect-chat.service';


interface Dato {
  mostrar: boolean
}

@Component({
  selector: 'app-c-chat',
  templateUrl: './c-chat.component.html',
  styleUrls: ['./c-chat.component.css']
})
export class CChatComponent implements OnInit {

  @Output() activar = new EventEmitter<boolean>();
  @Input() friend:Usuarios = {
    rol     : '',
    estado  : false,
    google  : false,
    online  : false,
    chat    : false,
    nombre  : '',
    apellido: '',
    correo  : '',
    id      : ''
  };

  constructor(private fb: FormBuilder, private sockectC: SockectChatService) { }

  ngOnInit(): void {

  }

  mostrar = () => { // Metodo para regresar a la lista de usuario
    this.activar.emit(true);
  }

  mensaje : FormGroup = this.fb.group({
    "msj" : ["",[Validators.required,Validators.minLength(1)]]
  })

  guardarMs(){
    if (this.mensaje.invalid) {
      return;
    }

    const data = {
      para   : this.friend.id,
      mensaje: this.mensaje.value.msj
    }

    this.sockectC.enviarMsj(data); //? Enviamos el mensaje y lo guardamos en la base de datos

    this.resetForm();
  }

  resetForm(){
    this.mensaje.reset({
      'msj': ''

    })
  }

}
