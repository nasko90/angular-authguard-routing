import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from 'src/app/security/security.service';
import { Router }  from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private securityService: SecurityService, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       let claimType = next.data["claimType"];
       let isUserAuthenticated = this.securityService.securityObject.isAuthenticated
       && this.securityService.securityObject[claimType];

    if(isUserAuthenticated ){
        return true;
      }
      else{
        let returnUrl = state.url;
        this.router.navigate(['login'], { queryParams: { returnUrl: returnUrl } });
        return false;
      }
  }

  redirectToLogin(){
  }
}
