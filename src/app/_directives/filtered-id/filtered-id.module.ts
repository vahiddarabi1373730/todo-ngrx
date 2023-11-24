import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilteredIdComponent} from './filtered-id.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    FilteredIdComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [FilteredIdComponent]
})
export class FilteredIdModule {
}
