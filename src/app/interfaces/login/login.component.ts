import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user/user.service';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';
import {Router} from '@angular/router';
import {debug} from 'ng-packagr/lib/util/log';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.authenticationRequest).subscribe(
      (data) => {
        this.userService.setAccessToken(data);
        this.getUserByEmail();
        this.router.navigate(['']);
      },
      (error) => {
        this.errorMessage = 'Votre Login ou mot de passe incorrecte';
      }
    );
  }
  

  getUserByEmail(): void {
   this.userService.getUserByEmail(this.authenticationRequest.login)
    .subscribe(user => {
    this.userService.setConnectedUser(user);
  });
 }

}



