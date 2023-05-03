import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private AuthServiceService:AuthServiceService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('here');
    return this.AuthServiceService.verificarToken().pipe(
      map((usuarioAuntenticado) =>{
        if(usuarioAuntenticado){
          return this.router.createUrlTree(['dashboard'])
        }else{
          return true;
        }
      })
    )
  }

}
