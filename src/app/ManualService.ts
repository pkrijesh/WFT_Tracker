import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ManualModel} from '../app/Mactivity';
import 'rxjs/add/operator/map';

@Injectable()
export class ManualService {

  constructor(private http: Http) { }

  addManualService(newtrainActivity) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/train', newtrainActivity, {headers: headers})
    .map(res => res.json());
  }
  getManualContact() {
    return this.http.get('http://localhost:3000/trainreport')
    .map(res => res.json());
  }
  getonemanual(id) {
    return this.http.get('http://localhost:3000/trainreport/' + id)
    .map(res => res.json());

  }
}
