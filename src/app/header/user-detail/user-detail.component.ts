import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';
import { User } from 'app/security/login/user.model';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  

  constructor(private lService: LoginService) { }

  ngOnInit() {
  }

  user(): User{
    return this.lService.user
  }


  isLoggedIn(): boolean{
    return this.lService.isLoggedIn()
  }

  login(){
    this.lService.handleLogin()
  }

  logout(){
    this.lService.logout()
  }
}
