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


@NgModule({
  declarations: [
    RootComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    ChildComponent,
    TodoComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
