import { Injectable } from '@angular/core';
import { Observable, of } from  'rxjs'
import { UserAuth } from 'src/app/models/user-auth';
import { User } from 'src/app/models/user';
import { Login_Mock } from 'src/app/models/user-mock';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
    securityObject: UserAuth = new UserAuth();

  constructor() {
   }

  login(user: User): UserAuth{
      localStorage.setItem('bearerToken', Login_Mock.bearerToken)
      return Login_Mock;
  }
}
