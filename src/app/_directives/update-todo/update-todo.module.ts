import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateTodoDirective} from "./update-todo.directive";


@NgModule({
  declarations: [UpdateTodoDirective],
  imports: [
    CommonModule
  ],
  exports: [UpdateTodoDirective]
})
export class UpdateTodoModule {
}
