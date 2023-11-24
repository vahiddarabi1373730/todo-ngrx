import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as fromActions from "../../state/actions";
import * as fromReducers from "../../state/reducers";
import {Store} from "@ngrx/store";
import {TodoState} from "../../state/reducers";
import {MatTableDataSource} from "@angular/material/table";
import {TodoInterface} from "../../_model/models.interface";

@Component({
  selector: '[app-filtered-id]',
  templateUrl: './filtered-id.component.html',
  styleUrls: ['./filtered-id.component.scss']
})
export class FilteredIdComponent {
  @Output() dataSource: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store<TodoState>) {
  }

  protected onFilterOrderById(value: any) {
    this.store.dispatch(new fromActions.FilteredTodos(value))
    this.store.select(fromReducers.getFilteredTodosSelector).subscribe(res => {
      this.dataSource.emit(res)
    })
  }

}
