import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGeneratorComponent} from './form-generator.component';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    FormGeneratorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule {
}
