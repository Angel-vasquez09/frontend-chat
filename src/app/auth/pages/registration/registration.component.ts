import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private validatorsSv: ValidatorsService) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.fb.group({
    nombre  : ['', [Validators.required, Validators.minLength(4)]],
    apellido: ['', [Validators.required,Validators.minLength(4) ]],
    email   : ['', [Validators.required, Validators.pattern( this.validatorsSv.emailPattern )], [this.validarEmail.bind(this)]],
    pass1   : ['', [Validators.required, Validators.minLength(8)]],
    pass2   : ['', [Validators.required]],
  },
  {
    validators: [ this.validatorsSv.passwordIguales('pass1','pass2') ]
  }
  )

  validarEmail(control: AbstractControl) {
    return this.validatorsSv.validate(control.value);
  }

  campoValido(campo: string){
    return  this.form.controls[campo].errors &&
            this.form.controls[campo].touched
  }


  // Onsubmit
  registrar(){

  }

}
