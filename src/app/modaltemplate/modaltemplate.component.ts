import { Component, OnInit } from '@angular/core';
import {AmscontactService} from '../amscontact.service';
import {amscontact} from '../amscontact';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
declare const $;

class Person {
  emp_id:string;
  emp_name: string;
  emp_con:string;
  emp_stack: string;
  emp_band:string;
  emp_man:string;
  emp_form:string;
  emp_loc:string;
}


@Component({
  selector: 'app-modaltemplate',
  templateUrl: './modaltemplate.component.html',
  styleUrls: ['./modaltemplate.component.css']
})
export class ModaltemplateComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  contacts:amscontact[];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private amsContactService: AmscontactService) { }

  ngOnInit() {
      this.amsContactService.getamsContact()
      .subscribe(contacts => {
       this.contacts = contacts;
      setTimeout(function () {
      }, 3000);

      $(function () {
        $('#example').DataTable( {
          dom: 'Bfrtip',
          buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
          ],
          responsive: {
                        }
      } );
      });


} );
  }
}

