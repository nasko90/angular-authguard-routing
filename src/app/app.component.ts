import { Component } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';
import { UserAuth } from 'src/app/models/user-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tennis';
  securityObject: UserAuth;

  constructor(private securityService: SecurityService){
    this.securityObject = this.securityService.securityObject;
  }

  logout(){
    
  }
}
