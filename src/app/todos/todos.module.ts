import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosComponent} from './todos.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {StoreModule} from "@ngrx/store";
import {reducers} from "../state/reducers";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DialogTodoComponent} from './dialog-todo/dialog-todo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {FormGeneratorModule} from "../components/form-generator/form-generator.module";
import {UpdateTodoModule} from "../_directives/update-todo/update-todo.module";
import {FilteredIdModule} from "../_directives/filtered-id/filtered-id.module";
import {MatSortModule} from "@angular/material/sort";


const routes: Routes = [
  {path: "", component: TodosComponent},
  {
    path: "grid",
    loadChildren: () => import('../display-todos-with-grid/display-todos-with-grid.module').then(m => m.DisplayTodosWithGridModule)
  }
]

@NgModule({
  declarations: [
    TodosComponent,
    DialogTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todos', reducers),
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    FormGeneratorModule,
    UpdateTodoModule,
    FilteredIdModule,
    MatSortModule

  ]
})
export class TodosModule {
  constructor() {
  }
}
