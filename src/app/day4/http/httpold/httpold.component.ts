import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'cts-httpold',
  templateUrl: './httpold.component.html',
  styleUrls: ['./httpold.component.css']
})
export class HttpoldComponent implements OnInit {

  constructor(private httpold:Http) { }

  getRemoteData(){
    this.httpold.get('https://jsonplaceholder.typicode.com/users')
              .map((response) => response.json()).subscribe((response)=>{
                console.log(response)
              })
  }

  ngOnInit() {
    this.getRemoteData()
  }

}
