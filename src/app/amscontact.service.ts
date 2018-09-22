import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {amscontact} from '../app/amscontact';
import 'rxjs/add/operator/map';

@Injectable()
export class AmscontactService {

  constructor(private http: Http) { }

  getamsContact() {
    return this.http.get('http://localhost:3000/users')
    .map(res => res.json());
  }



  getoneamscontact(appuid){
    return this.http.get('http://localhost:3000/users/'+appuid)
    .map(res => res.json());

  }

  addAmsContact(newamsContact) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users', newamsContact, { headers: headers})
    .map(res => res.json());
  }

  deleteAmsContact(id) {
    return this.http.delete('http://localhost:3000/users/' + id)
    .map(res => res.json());
  }


  //edit method
  updateContact(newContact){
    console.log("Inside edit service");
  let headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.put('http://localhost:3000/users/'+newContact._id,newContact,{headers:headers})
  .map(res=>res.json());
}

}
