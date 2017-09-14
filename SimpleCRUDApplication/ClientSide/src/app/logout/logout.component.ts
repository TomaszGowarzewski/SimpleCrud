import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService) { }
  LogoutStatus : string = "blabla";
  ngOnInit() {
    this.authenticationService.logout();
    if (!localStorage.getItem('CurrentUser'))
    {
      this.LogoutStatus = "Wylogowano";
    }
    else
    {
      this.LogoutStatus = "Nie Wylogowano"+localStorage.getItem('CurrentUser');
    }
  }
}
