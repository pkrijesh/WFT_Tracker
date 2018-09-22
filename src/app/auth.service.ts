import { Http,Headers } from '@angular/http';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }
  signup (user: User){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/login",user,{headers:headers})
    .map(res=>res.json());
    }
}
