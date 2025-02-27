import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

//const Token_Header='Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add jwt token request 
      const token=this.login.getToken();
      let authReq=req;
      if(token!=null){
        authReq=authReq.clone({
            setHeaders: { Authorization: `Bearer ${token}`},
        })
      }
      return next.handle(authReq)
    }
    
}

export const AuthInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]