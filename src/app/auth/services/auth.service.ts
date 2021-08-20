import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string = environment.URL;

  constructor(private http: HttpClient, private router: Router) { }





  // AUTENTICAR USUARIO
  authLogin( email:string, pass: string ){

    const data = { correo: email, password: pass };

    return this.http.post(`http://localhost:8080/auth/login`,data)
    .subscribe((resp:any) => {
      if(resp.token){
        localStorage.setItem("token",resp.token);
        this.router.navigate(['chat'])
      }
    })


  }



}
