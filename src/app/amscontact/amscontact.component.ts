import { Component, OnInit } from '@angular/core';
import {AmscontactService} from '../amscontact.service';
import {amscontact} from '../amscontact';

@Component({
  selector: 'amscontact',
  templateUrl: './amscontact.component.html',
  styleUrls: ['./amscontact.component.css']
})
export class AmscontactComponent implements OnInit {
  contacts: amscontact[];
  keys: String[];
  contact: amscontact;
  emp_id: string;
  emp_name: string;
  emp_con: string;
  emp_stack: string;
  emp_band: string;
  emp_mgr: string;
  emp_form: string;
  emp_loc: string;
  toggleForm: boolean = false;
  selectedItem: amscontact;


  constructor(private amsContactService: AmscontactService) { }
  selectApp(event: any) {
    this.emp_name = event.target.value;
  }
addamsContact() {
  const newamsContact = {
    emp_id: this.emp_id,
    emp_name: this.emp_name,
    emp_con: this.emp_con,
    emp_stack: this.emp_stack,
    emp_band: this.emp_band,
    emp_mgr: this.emp_mgr,
    emp_form: this.emp_form,
    emp_loc: this.emp_loc
  };

  console.log(newamsContact);
  this.amsContactService.addAmsContact(newamsContact)
  .subscribe(contact => {
    this.contacts.push(contact);
    this.amsContactService.getamsContact()
    .subscribe(contacts => this.contacts = contacts);
    this.emp_id = "";
    this.emp_name = "";
    this.emp_con = "";
    this.emp_stack="";
    this.emp_band="";
    this.emp_mgr="";
    this.emp_form="";
    this.emp_loc= "";
  });
}

deleteamsContact(id:any){
  var contacts =this.contacts;
  this.amsContactService.deleteAmsContact(id)
  .subscribe(data => {
    if(data.n == 1){
      console.log("before splice")
      for(var i =0;i < contacts.length; i++){
        if (contacts[i]._id == id){
          console.log("id matched");
          contacts.splice(i, 1);
        }
      }
    }
  })
}
getContact()
{
  console.log("get");
  this.amsContactService.getamsContact()
  .subscribe(contacts => this.contacts = contacts);
}
// Edits
editContact(form)
{
  console.log("Inside edit function");
  const newContact: amscontact = {
    _id: this.selectedItem._id,
    //need to change
    emp_id: form.value.emp_id,
    emp_name: form.value.emp_name,
    emp_con: form.value.emp_con,
    emp_stack: form.value.emp_stack,
    emp_band: form.value.emp_band,
    emp_mgr: form.value.emp_mgr,
    emp_form: form.value.emp_form,
    emp_loc: form.value.emp_loc
      }
      this.amsContactService.updateContact(newContact)
      .subscribe(contact => {
        console.log('value is getting updated');
        this.getContact();
       });
       this.toggleForm = !this.toggleForm;
}
showUpdateForm(contact)
{
  this.selectedItem = contact;
  this.toggleForm = !this.toggleForm;
}
cancel(){
  this.toggleForm = !this.toggleForm;
}

  ngOnInit() {
   this.amsContactService.getamsContact()
   .subscribe(contacts => {
    this.contacts = contacts;
    this.keys = Object.keys(this.contacts);
    console.log(this.contacts);

   // Object.keys(contacts);

  });

  }

}
