import { ManualModel } from './../Mactivity';
import { Component, OnInit, Input } from '@angular/core';
import {ManualService} from '../ManualService';
import {ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs/Subject';

declare const $;
@Component({
  selector: 'vwmanualactivity',
  templateUrl: './vw-manualactivity.component.html',
  styleUrls: ['./vw-manualactivity.component.css'],
  providers:[ManualService]
})
export class VwManualactivityComponent implements OnInit {
  visiblestatus: true;
  dtOptions: DataTables.Settings = {};
  contacts: ManualModel[];
  keys: String[];
  contact: ManualModel;
  appuid: String;
  manualactivities;
  tname: string;
  tstatus: string;
  tdate: string;
  isSelected= false;
  dtTrigger: Subject<any> = new Subject();
@Input() appRef: string;
// @Input() manual: ManualModel;

  constructor(private route:ActivatedRoute,private manualService: ManualService) {

  }
  /*toggle() {
    console.log('inside toggle');
    this.isSelected =! this.isSelected;

  }*/

getManualContact() {
  console.log('get');
  this.manualService.getManualContact()
  .subscribe(contacts => this.contacts = contacts);
}
addManual(value) {
    const newManual = {
      tname: this.tname,
      tstatus: this.tstatus,
      tdate: this.tdate,
      appRef: this.appRef
  };
// const manual = new ManualModel ( value, 'ABi');
console.log(newManual);
    this.manualService.addManualService(newManual)
    .subscribe(response => {
      console.log(response);
        this.tname = '';
      this.tstatus = '';
    this.tdate = ''; }
      );
    }


ngOnInit() {
  this.isSelected = true;
  console.log("manual componet initialized");
  this.appuid = this.route.snapshot.paramMap.get('appuid');
  this.manualService.getonemanual(this.appuid)
  .subscribe(manualactivities => {
   this.manualactivities = manualactivities;
  setTimeout(function () {
  }, 3000);
   $(function () {
    $('#vwmanual-activity').DataTable( {
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
  } );
  });
 });

   /* $(function () {
      $('#vwmanual-activity').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'print'
        ]
    } );
    });
  }
*/
}
}
