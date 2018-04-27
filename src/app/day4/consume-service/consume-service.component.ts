import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../service/service-one.service';

@Component({
  selector: 'cts-consume-service',
  templateUrl: './consume-service.component.html',
  styleUrls: ['./consume-service.component.css']
})
export class ConsumeServiceComponent implements OnInit {

  constructor(private oneService:ServiceOneService) { }

  ngOnInit() {
    console.log(this.oneService.localSuccess());
    console.log(this.oneService.user)
  }

}
