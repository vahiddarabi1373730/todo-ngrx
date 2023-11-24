import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayTodosWithGridComponent} from './display-todos-with-grid.component';
import {GridGeneratorModule} from "../components/grid-generator/grid-generator.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: DisplayTodosWithGridComponent}
]

@NgModule({
  declarations: [
    DisplayTodosWithGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GridGeneratorModule
  ]
})
export class DisplayTodosWithGridModule {
}
