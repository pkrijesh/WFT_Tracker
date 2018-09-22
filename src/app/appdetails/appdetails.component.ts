import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AmscontactService} from '../amscontact.service';
import {amscontact} from '../amscontact';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'appdetails',
  templateUrl: './appdetails.component.html',
  styleUrls: ['./appdetails.component.css']
})
export class AppdetailsComponent implements OnInit {
  alldetails;
  manualactivity;
  appuid: String;
  selectedItem:amscontact;
  constructor(private route:ActivatedRoute,private amsContactService: AmscontactService) { }
  editContact(form){
    //console.log(form.value.wipro_pm);
    let newContact:amscontact = {
      _id: this.route.snapshot.paramMap.get('appuid'),
      //need to change
      emp_id:form.value.emp_id,
      emp_name:form.value.emp_name,
      emp_con:form.value.emp_con,
      emp_stack:form.value.emp_stack,
      emp_band:form.value.emp_band,
      emp_mgr:form.value.emp_mgr,
      emp_form:form.value.emp_form,
      emp_loc:form.value.emp_loc
        }
        this.amsContactService.updateContact(newContact)
        .subscribe(contact => {
          console.log("value is getting updated");

         });
  }

  ngOnInit() {
   this.appuid = this.route.snapshot.paramMap.get('appuid');
   console.log(this.appuid);
   this.amsContactService.getoneamscontact(this.appuid)
   .subscribe(alldetails=>{
    this.alldetails=alldetails;
    console.log(this.alldetails);

  });
  console.log(this.alldetails);
  }

}

