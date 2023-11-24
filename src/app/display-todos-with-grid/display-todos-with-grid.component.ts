import {Component, OnInit} from '@angular/core';
import {GridOptions, GridSizeChangedEvent} from "ag-grid-community";
import {Store} from "@ngrx/store";
import * as fromReducers from "../state/reducers";
import {TodoState} from "../state/reducers";
import {Observable} from "rxjs";
import {TodoServices} from "../_services/todo.services";


@Component({
  selector: 'app-display-todos-with-grid',
  templateUrl: './display-todos-with-grid.component.html',
  styleUrls: ['./display-todos-with-grid.component.scss']
})
export class DisplayTodosWithGridComponent implements OnInit {

  constructor(private store: Store<TodoState>, private todoServices: TodoServices) {
  }

  protected rowData$: Observable<any[]> = this.store.select(fromReducers.getTodosSelector)
  protected gridOptions: GridOptions = {
    columnDefs: [
      {colId: 'id', field: 'id',},
      {colId: 'name', field: 'name',},
      {colId: 'time', field: 'time',},
      {colId: 'duration', field: 'duration',},

    ],
    defaultColDef: {
      sortable: true,
      filter: true,
    },
  }

  fetchExercises() {
    this.todoServices.getTodos();
  }

  ngOnInit() {
    this.fetchExercises()
  }

}
