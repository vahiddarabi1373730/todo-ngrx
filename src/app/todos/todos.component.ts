import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {TodoServices} from "../_services/todo.services";
import {TodoInterface} from "../_model/models.interface";
import {Store} from "@ngrx/store";
import * as fromReducers from "../state/reducers";
import {TodoState} from "../state/reducers";
import * as fromActions from "../state/actions";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogTodoComponent} from "./dialog-todo/dialog-todo.component";
import {MatPaginator} from "@angular/material/paginator";
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  protected selection = new SelectionModel<TodoInterface>(true, []);
  protected dataSource = new MatTableDataSource<TodoInterface>();
  protected displayedColumns: string[] = ['select', 'id', 'name', 'time', 'duration'];
  protected selectedTodoId: number | undefined;
  protected selectedTodo: TodoInterface | undefined;
  protected onTodoChecked: boolean = false
  protected filterOrderById!: string;

  constructor(private todoServices: TodoServices, private store: Store<TodoState>, private cd: ChangeDetectorRef, private matDialog: MatDialog) {
  }

  protected toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  protected isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  protected onClick(event: any, dataSource: TodoInterface) {
    event.stopPropagation()
    this.store.dispatch(new fromActions.SetTodo(dataSource))
    this.onTodoChecked = true
    this.selectedTodoId = dataSource.id
    this.selectedTodo = dataSource
  }

  protected onFilterOrderById(dataSource: any) {
    this.dataSource.data = dataSource
  }

  protected onFilterOrderByName(value: any) {
    this.store.dispatch(new fromActions.FilteredTodos(value))
    this.store.select(fromReducers.getFilteredTodosSelector).subscribe(res => {
      this.dataSource.data = res
    })
  }

  protected deleteTodo() {
    this.store.dispatch(new fromActions.RemoveTodo(this.selectedTodoId as number))
    this.selection.deselect(this.selectedTodo as TodoInterface)
    this.onTodoChecked = false
  }

  protected deleteAllTodos() {
    const selectedIds = this.selection.selected.map(todo => todo.id)
    this.store.dispatch(new fromActions.RemoveAllTodos(selectedIds as number[]))
    this.selection.clear()
  }

  updateTodo() {
    this.matDialog.open(
      DialogTodoComponent,
      {
        width: '90%',
        height: '90%',
        data: this.selectedTodo
      }
    )
    this.onTodoChecked = false
  }


  addTodo() {
    this.matDialog.open(DialogTodoComponent, {
      width: '90%',
      height: '90%',
    })
  }

  fetchExercises() {
    this.todoServices.getTodos();
  }

  ngOnInit() {
    this.fetchExercises()

    this.store.select(fromReducers.getTodosSelector).subscribe(res => {
      this.dataSource.data = res
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator
  }
}


