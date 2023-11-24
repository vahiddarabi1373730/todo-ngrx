import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUpdateTodo]'
})
export class UpdateTodoDirective {

  @Input('appUpdateTodo') set condition(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }

  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

}
