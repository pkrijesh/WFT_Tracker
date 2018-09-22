import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  @Input() isloggedein: boolean;

  constructor(private router: Router) {}
  signin(){
   if(this.email =='admin' && this.password=='admin') {
    // logiv for route logic goes here
    //create local storage property for hide when feature
    localStorage.setItem('token', 'Admin');
    localStorage.setItem('Role','AdminRole');
    window.location.reload();
    this.router.navigateByUrl('/App1');
    this.isloggedein = true;
    }
   else if(this.email == 'rakesh.padoli@wipro.com' && this.password=='admin'){
    localStorage.setItem('token', 'Rakesh');
    localStorage.setItem('Role','AdminRole');
    window.location.reload();
    this.router.navigateByUrl('/App1');
    this.isloggedein = true;
   }
   else if(this.email == 'manjusha.narayanan@wipro.com' && this.password=='admin'){
    localStorage.setItem('token', 'manjusha');
    localStorage.setItem('Role','AdminRole');
    window.location.reload();
    this.router.navigateByUrl('/App1');
    this.isloggedein = true;
   }
   else if(this.email =='user' && this.password=='user'){
    localStorage.setItem('token', 'Anonymous');
    localStorage.setItem('Role','user');
    window.location.reload();
    this.router.navigateByUrl('/App1');
    this.isloggedein = true;
   }

   else {
    console.log('not correct');
    this.isloggedein = false;
   }
  }


  ngOnInit() {
  }

}
