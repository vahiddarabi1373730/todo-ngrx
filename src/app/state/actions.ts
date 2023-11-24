import {Action} from "@ngrx/store";
import {TodoInterface} from "../_model/models.interface";

export const SET_TODOS = '[TODO]Set_Todos'
export const SET_TODO = '[TODO]Set_Todo'
export const ADD_TODO = '[TODO] Add_Todo'
export const REMOVE_TODO = '[TODO] Remove_Todo'
export const REMOVE_ALL_TODOS = '[TODO] Remove_Todos'
export const UPDATE_TODO = '[TODO] Update_Todo'
export const FILTER_TODOS = '[TODO] Filter_Todos'


export class SetTodos implements Action {
  readonly type: string = SET_TODOS;

  constructor(public payload: TodoInterface[]) {
  }
}

export class SetTodo implements Action {
  readonly type: string = SET_TODO

  constructor(public payload: TodoInterface) {
  }
}

export class AddTodo implements Action {
  public readonly type: string = ADD_TODO;

  constructor(public payload: TodoInterface) {
  }
}

export class UpdateTodo implements Action {
  public readonly type: string = UPDATE_TODO;

  constructor(public payload: TodoInterface) {
  }
}

export class FilteredTodos implements Action {
  public readonly type: string = FILTER_TODOS

  constructor(public payload: any) {
  }
}

export class RemoveTodo implements Action {
  public readonly type: string = REMOVE_TODO;

  constructor(public payload: number) {
  }
}

export class RemoveAllTodos implements Action {
  public readonly type: string = REMOVE_ALL_TODOS;

  constructor(public payload: number[]) {
  }

}

export type TodoActions = SetTodos | SetTodo | AddTodo | UpdateTodo | RemoveTodo | RemoveAllTodos | FilteredTodos
