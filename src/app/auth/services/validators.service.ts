import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailPattern   : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(private http: HttpClient) { }


  passwordIguales(password1: string, password2: string){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(password1)?.value;
      const pass2 = formGroup.get(password2)?.value;
      if (pass1 === pass2) {
        // Le decimos al formulario que el campo password2 no tiene ningun error
        formGroup.get(password2)?.setErrors(null)
        return null
      }else{
        // Le decimos al formulario que el pasword2 no coincide con el password 1
        formGroup.get(password2)?.setErrors({noIguales:true})
        return {
          noIgual: true
        }
      }
    }
  }

  // VALIDAR EMAIL EN LA BASE DE DATOS DE FORMA ASINCRONA
  validate(email: string){
    return this.http.get<any[]>(`http://localhost:8080/auth/login?q=${ email }`)
          .pipe(
            map( resp => {
              return (resp.length === 0) ? null : { emailTomado: true }
            })
          )
  }
}
