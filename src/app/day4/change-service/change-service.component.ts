import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../service/service-one.service';

@Component({
  selector: 'cts-change-service',
  templateUrl: './change-service.component.html',
  styleUrls: ['./change-service.component.css']
})
export class ChangeServiceComponent implements OnInit {

  constructor(private oneService:ServiceOneService) { }

  ngOnInit() {
    this.oneService.user.name = "Adi"
    this.oneService.user.score = 10
    console.log(this.oneService.user)

  }

}
