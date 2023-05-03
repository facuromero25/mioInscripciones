import { Component } from '@angular/core';
import { enviroment } from '../../environments/enviroments';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../core/models';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { Router } from '@angular/router';
import links from './nav-items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;
  isProd = enviroment.isProduction;

  authUser$: Observable<Usuario | null>;

  links = links;

  destroyed$ = new Subject<void>();

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {

    this.authUser$ = this.authService.obtenerUsuarioAutenticado()

    // this.authService.obtenerUsuarioAutenticado()
    //   .pipe(
    //     // tomar hasta que el componente se destruya
    //     takeUntil(this.destroyed$)
    //   )
    //   .subscribe((usuario) => this.authUser = usuario);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  logout(): void {
    this.authService.logout();
  }
}
