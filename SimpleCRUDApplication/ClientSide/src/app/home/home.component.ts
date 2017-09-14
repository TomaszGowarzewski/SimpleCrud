import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { EmployeesRepositoryService } from '../employees-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  error: string;
  loading: boolean;
  login: string;
  password:string;

  constructor(private router : Router,private authenticationService : AuthenticationService,private employeesRepository : EmployeesRepositoryService) { }

log(){
this.loading = true;
this.authenticationService.login(this.login,this.password).subscribe(result =>{
  if (result === true)
  {
    this.router.navigate(['/']);
  }
  else{
    this.error = "Dupa";
    this.loading = false;
  }
})
}
  ngOnInit() {
  this.authenticationService.logout();
  }

}
