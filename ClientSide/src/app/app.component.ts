import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name:string = "";
  email:string = "";
  static Init(){
  }
  ngOnInit(): void {
    console.log(localStorage.getItem("CurrentUser"));

    if (!localStorage.getItem("CurrentUser"))
    {
      console.log("nie jestes zalogowany");
    }
    else{

      var user = JSON.parse(localStorage.getItem("CurrentUser"));

      this.email = user["username"];
      console.log("jestes zalogowany");
    }
  }
  title = 'app';

}
