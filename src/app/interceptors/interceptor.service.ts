import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token')!;

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(this.manejarError)
    )
  }


  manejarError(err: HttpErrorResponse){

    if(err.status === 401){
        console.log("Correo o password invalidas");
    }else if(err.status === 400){
        console.log("Validar los siguientes campos !!");
    }
    console.log("Ocurrio un error inesperado")
    console.log(err)
    console.log(err.status)

    return throwError(err);

  }
}
