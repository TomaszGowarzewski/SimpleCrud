import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  public token : string;
  constructor(private httpClient : HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
    this.token = currentUser && currentUser.token;
   }

   login(username : string,password : string) : Observable<boolean>{
     return this.httpClient.post("http://localhost:5000/api/Account/signIn",JSON.stringify({email:username,password:password}), { headers: new HttpHeaders().set('Content-Type', 'application/json'), })
     .map((response : Response) =>{
       console.dir(response);
      let token = response && response['access_token'];
      if (token)
      {
        this.token = token;
        console.log(JSON.stringify({username : username,token : token}));
        localStorage.setItem('CurrentUser',JSON.stringify({username : username,token : token}));
        console.log("zalogowano");
        return true;
      }
      else{
        console.log("nie zalogowano");
        return false;
      }
    })

   }

   logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('CurrentUser');
    console.log(localStorage.getItem('CurrentUser'));
   }
}
