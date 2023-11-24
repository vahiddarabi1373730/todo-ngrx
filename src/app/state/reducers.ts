import {TodoInterface} from "../_model/models.interface";
import {
  ADD_TODO,
  FILTER_TODOS,
  REMOVE_TODO,
  REMOVE_ALL_TODOS,
  SET_TODO,
  SET_TODOS,
  TodoActions,
  UPDATE_TODO
} from './actions'
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface InitialTodoStateInterface {
  todos: TodoInterface[],
  selectedTodo: TodoInterface,
  filteredTodos: TodoInterface[]

}

export interface TodoState {
  todos: TodoInterface[];
  selectedTodo: TodoInterface;
  filteredTodos: TodoInterface[]
}

export function reducers(state: InitialTodoStateInterface = {
  todos: [],
  selectedTodo: {},
  filteredTodos: []
}, action: TodoActions) {
  const copyTodos = [...state.todos]
  switch (action.type) {

    case SET_TODOS:
      return {...state, todos: action.payload}

    case SET_TODO :
      return {...state, selectedTodo: action.payload}
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.payload]}

    case UPDATE_TODO:
      const findIndexTodo = state.todos.findIndex(todo => todo.id === action.payload.id)
      copyTodos[findIndexTodo] = action.payload
      return {...state, todos: copyTodos}


    case REMOVE_TODO:
      const indexTodo = state.todos.findIndex(todo => todo.id === action.payload)
      copyTodos.splice(indexTodo, 1)
      
      return {...state, todos: copyTodos}

    case REMOVE_ALL_TODOS:
      return {...state, todos: []}
    case FILTER_TODOS:
      const filteredTodos: TodoInterface[] = copyTodos.filter(todo => todo.name?.includes(action.payload))
      return {...state, filteredTodos: filteredTodos}

    default:
      return state
  }

}


const getTodoState = createFeatureSelector<TodoState>('todos');
export const getTodosSelector = createSelector(
  getTodoState,
  (state: TodoState) => state.todos
);

export const getTodoSelector = createSelector(getTodoState, (state: TodoState) => state.selectedTodo)

export const getFilteredTodosSelector = createSelector(getTodoState, (state: TodoState) => state.filteredTodos)

