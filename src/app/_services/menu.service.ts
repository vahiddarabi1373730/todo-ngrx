import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public isOpenMenuTreeSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isOpenMenuTree$$: Observable<boolean> = this.isOpenMenuTreeSubject$.asObservable()

  constructor() {
  }
}
