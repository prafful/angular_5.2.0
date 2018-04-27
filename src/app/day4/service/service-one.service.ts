import { Injectable } from '@angular/core';

@Injectable()
export class ServiceOneService {

  constructor() { }

  user = {
      id:1,
      name:"prafful",
      score:8
  }

  localSuccess(){
    return "Hello from local service!!!!"
  }

}
