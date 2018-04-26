import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name = "Prafful Daga"

  birthday = new Date()

  money = 100

  scores =[45, 5, 6, 8, 2, 1, 78, 99, 7]
  friends = [ 'prafful', 'ajay', 'gowri', 'anbarasan', 'Tarun', 'Laks' ]

  constructor() { }

  ngOnInit() {
  }

}
