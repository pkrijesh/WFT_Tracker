import { Component, OnInit } from '@angular/core';
import {AmscontactService} from '../amscontact.service';
import {amscontact} from '../amscontact';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

declare const $;


import 'rxjs/add/operator/map';

class Person {
  emp_id:string;
  emp_name:string;
  emp_con:string;
  emp_stack:string;
}


@Component({
  selector: 'supportedapps',
  templateUrl: './supported-apps.component.html',
  styleUrls: ['./supported-apps.component.css']
})
export class SupportedAppsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  contacts:amscontact[];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  constructor(private amsContactService: AmscontactService) { }

  ngOnInit(){
    this.amsContactService.getamsContact()
    .subscribe(contacts=>{
     this.contacts=contacts;
    setTimeout(function () {
    }, 3000);
     $(function () {
      $('#user-table').DataTable( {
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
    });
   });


   }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
