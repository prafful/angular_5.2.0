import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  onSubmit = function(user){
    console.log("user captured in form: ")
    console.log(user)
  }

  constructor() { }

  ngOnInit() {
  }

}
