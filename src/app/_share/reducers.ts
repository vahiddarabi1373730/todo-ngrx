import * as fromShare from './actions'
export interface InitialLoadingInterface{
  loading:boolean,
  loadingEnd:boolean
}
export function reducers(state:InitialLoadingInterface,action:{type:string,payload:any}):InitialLoadingInterface{
  switch (action.type){
    case fromShare.LOADING :

    default: return  state
  }
}
