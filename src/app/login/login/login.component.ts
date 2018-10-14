import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SecurityService } from 'src/app/security/security.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User;
    returnUrl: string;
  constructor(private securityService: SecurityService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    console.log(this.returnUrl);
  }

  login(){
    this.router.navigate([this.returnUrl]);
  }
}
