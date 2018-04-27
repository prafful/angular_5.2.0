import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'cts-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {

  userForm;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
        firstName: new FormControl("", Validators.compose([
                                                Validators.required, 
                                                Validators.minLength(4),
                                                Validators.pattern('[a-zA-Z ]*$')
                                              ])),
        lastName:  new FormControl("", this.nameLengthValidator),
        hobby:new FormControl("", Validators.required)

    });    
  }

  nameLengthValidator = function(control){
    if(control.value.length < 4){
      return { 'lastName': true}
    }

    
  }

  onSubmit = function(user){
    console.log(user);
    
  }

}
