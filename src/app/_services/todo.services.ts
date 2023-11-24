import {Injectable} from "@angular/core";
import {TodoInterface} from "../_model/models.interface";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import * as fromActions from "../state/actions";
import * as fromReducers from "../state/reducers";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoServices {


  public todosSubject$: BehaviorSubject<TodoInterface | null> = new BehaviorSubject<TodoInterface | null>(null)
  public todo$$: Observable<TodoInterface | null> = this.todosSubject$.asObservable();

  constructor(private http: HttpClient, private store: Store<fromReducers.TodoState>) {
  }

  public getTodos(): void {
    this.http.get<TodoInterface[]>('http://localhost:4200/assets/data.json').subscribe(res => {
      this.store.dispatch(new fromActions.SetTodos(res))
    })
  }
}
