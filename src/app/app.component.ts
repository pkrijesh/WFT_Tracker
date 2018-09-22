import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  loginuser: string;
  role: string;
  islogin= false;
  isAdmin= false;
  constructor(private router: Router) { }

  logout(){
    localStorage.clear();
    window.location.reload();
    this.router.navigateByUrl('/');
  }
  ngOnInit(){
    if('token' in localStorage){
      this.loginuser = localStorage.getItem('token');
      this.role = localStorage.getItem('Role');
      this.islogin= true;
      if(this.role =="AdminRole") {
        this.isAdmin= true;
      }
  }
  else{
    this.islogin = false;
  }
  }
}
