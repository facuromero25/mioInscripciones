import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private router:Router,private AuthServiceService: AuthServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AuthServiceService.verificarToken().pipe(
      map((usuarioAutenticado) => {
        if(!usuarioAutenticado){
          return this.router.createUrlTree(['auth','login'])
        }else{
          return true;

        }
      })
    )
  }

}
