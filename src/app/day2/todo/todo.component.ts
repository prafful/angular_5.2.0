import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks = ["Do the Angular 4 session", 
            "Read about Block Chain",
            "Plan for the weekend",
            "Get the car serviced"]

  newTask = ""          

  constructor() { }

  ngOnInit() {
  }

  addTask = function(){
    if(this.newTask != ""){
      console.log("I want to add new task")
      this.tasks.push(this.newTask)
      console.log(this.tasks)
      this.newTask=""
    }
    
  }

  deleteTask = function(receiveCounter){
    this.tasks.splice(receiveCounter, 1 )
  }

}
