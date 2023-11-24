import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {TodoServices} from "../../_services/todo.services";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormModelInterface, TodoInterface} from "../../_model/models.interface";
import {Store} from "@ngrx/store";
import * as fromReducer from "../../state/reducers";
import {TodoState} from "../../state/reducers";
import * as fromActions from "../../state/actions";
import {Observable} from "rxjs";
import {FormGeneratorService} from "../../_services/form-generator.service";

@Component({
  selector: 'app-dialog-todo',
  templateUrl: './dialog-todo.component.html',
  styleUrls: ['./dialog-todo.component.scss']
})
export class DialogTodoComponent implements OnInit {

  protected formGroup!: FormGroup;
  protected formFields: FormModelInterface[] = [
    {name: 'id', defaultValue: this.data?.id, type: 'fc', isShow: false},
    {name: 'name', defaultValue: this.data?.name, type: 'fc', isShow: true},
    // {
    //   name: 'address',
    //   type: 'fg',
    //   validation: Validators.required,
    //   isShow: true,
    //   children: [
    //     {name: 'street', type: 'fc', validation: Validators.required, isShow: true},
    //     {
    //       name: "pluck", type: 'fc', validation: Validators.required, isShow: true
    //     }]
    // },
    {name: 'time', defaultValue: this.data?.time, type: 'fc', validation: Validators.required, isShow: true},
    {name: 'duration', defaultValue: this.data?.duration, type: 'fc', validation: Validators.required, isShow: true},
  ]

  constructor(private formGeneratorService: FormGeneratorService, private todoServices: TodoServices, @Inject(MAT_DIALOG_DATA) private data: TodoInterface, private store: Store<TodoState>) {
  }

  protected todo$: Observable<TodoInterface> = this.store.select(fromReducer.getTodoSelector)

  onSubmit() {
    if (this.data) {
      this.todoServices.todosSubject$.next(this.formGroup.value)
      this.store.dispatch(new fromActions.UpdateTodo(this.formGroup.value))
    } else {
      this.todoServices.todosSubject$.next({...this.formGroup.value, id: Math.random()})
      this.store.dispatch(new fromActions.AddTodo({...this.formGroup.value, id: Math.random()} as TodoInterface))
    }
  }


  onCanceled() {
    this.todoServices.todosSubject$.next(null)
  }


  ngOnInit() {
    this.formGroup = this.formGeneratorService.createFormGroup(this.formFields)
  }


}

