import {Action} from "@ngrx/store";

export const LOADING='[todo] loading';
export const LOADINGEND='[todo] endLoading'

export class Loading implements Action{
  public readonly type:string=LOADING
  constructor(private payload:boolean) {
  }
}

export class LoadingEnd implements Action {
  public readonly type:string=LOADINGEND
  constructor(private payload:boolean) {
  }
}

export type LadingType=Loading | LoadingEnd
