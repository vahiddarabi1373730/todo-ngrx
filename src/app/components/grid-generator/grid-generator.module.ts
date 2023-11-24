import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridGeneratorComponent} from './grid-generator.component';
import {AgGridModule} from 'ag-grid-angular';


@NgModule({
  declarations: [
    GridGeneratorComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports: [GridGeneratorComponent]
})
export class GridGeneratorModule {
}
