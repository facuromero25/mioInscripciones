import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private AuthServiceService: AuthServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('here');
      return this.AuthServiceService.obtenerUsuarioAutenticado()
      .pipe(
        map((usuarioAutenticado) => {
          if (usuarioAutenticado?.role !== 'admin') {
            alert('No tienes permiso')
            return false;
          } else {
            return true;
          }
        })
      )
  }

}
