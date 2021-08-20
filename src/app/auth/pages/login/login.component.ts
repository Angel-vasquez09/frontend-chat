import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    // Agregarle valores a mi formulario al iniciar la pagina
    this.miFormulario.reset({
      'email': 'luis@hotmail.com',
      'pass'  : "1002197694Angel",
    })
  }

  miFormulario: FormGroup = this.fb.group({
    'email'   : [ , [Validators.required, Validators.minLength(3)] ],
    'pass'    : [ , [Validators.required, Validators.minLength(4)]],
  })

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value.email)
    this.auth.authLogin(this.miFormulario.value.email,this.miFormulario.value.pass);
    // Vaciar formulario
    //this.miFormulario.reset()
  }


  campoValido(campo: string){
    return  this.miFormulario.controls[campo].errors &&
            this.miFormulario.controls[campo].touched
  }



}
