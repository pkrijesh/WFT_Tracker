import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if("token" in localStorage){
      this.router.navigateByUrl('/App1');
  } else {
    this.router.navigateByUrl('/');
  }
  }

}
