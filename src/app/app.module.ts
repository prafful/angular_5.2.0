import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { RootComponent } from './app.component';
import { FamilyComponent } from './day2/family/family.component';
import { FatherComponent } from './day2/family/father/father.component';
import { MotherComponent } from './day2/family/mother/mother.component';
import { ChildComponent } from './day2/family/child/child.component';
import { TodoComponent } from './day2/todo/todo.component';
import { PipesComponent } from './day3/pipes/pipes.component';
import { SortNamePipe } from './day3/custom-pipe/sort-name.pipe';
import { SortNumberPipe } from './day3/custom-pipe/sort-number.pipe';
import { TemplatedrivenComponent } from './day3/forms/templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './day3/forms/modeldriven/modeldriven.component';


@NgModule({
  declarations: [
    RootComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    ChildComponent,
    TodoComponent,
    PipesComponent,
    SortNamePipe,
    SortNumberPipe,
    TemplatedrivenComponent,
    ModeldrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'father',
        component:FatherComponent
      },
      {
        path:'mother',
        component:MotherComponent
      },
      {
        path:'child',
        component:ChildComponent
      },
      {
        path:'todo',
        component:TodoComponent
      },
      {
        path:'pipe',
        component:PipesComponent
      },
      {
        path:'templateform',
        component:TemplatedrivenComponent
      },
      {
        path:'modelform',
        component:ModeldrivenComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
