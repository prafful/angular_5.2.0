import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { ServiceOneService } from "./day4/service/service-one.service";

import { RootComponent } from './app.component';
import { FamilyComponent } from './day2/family/family.component';
import { FatherComponent } from './day2/family/father/father.component';
import { MotherComponent } from './day2/family/mother/mother.component';
import { ChildComponent } from './day2/family/child/child.component';
import { TodoComponent } from './day2/todo/todo.component';
import { PipesComponent } from './day3/pipes/pipes.component';
import { TemplatedrivenComponent } from './day3/forms/templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './day3/forms/modeldriven/modeldriven.component';

import { SortNamePipe } from './day3/custom-pipe/sort-name.pipe';
import { SortNumberPipe } from './day3/custom-pipe/sort-number.pipe';
import { ConsumeServiceComponent } from './day4/consume-service/consume-service.component';
import { ChangeServiceComponent } from './day4/change-service/change-service.component';
import { HttpoldComponent } from './day4/http/httpold/httpold.component';

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
    ModeldrivenComponent,
    ConsumeServiceComponent,
    ChangeServiceComponent,
    HttpoldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
      },
      {
        path:'consumeservice',
        component:ConsumeServiceComponent
      },
      {
        path:'changeservice',
        component:ChangeServiceComponent
      },
      {
        path:'httpold',
        component:HttpoldComponent
      }
    ])
  ],
  providers: [ServiceOneService],
  bootstrap: [RootComponent]
})
export class AppModule { }
