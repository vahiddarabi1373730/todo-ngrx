import {FormArray, FormControl, FormGroup} from "@angular/forms";

export interface TodoInterface {
  id?: number,
  name?: string,
  time?: string,
  duration?: string,
}

export interface FormModelInterface {
  defaultValue?: any,
  name: string,
  type: string,
  validation?: any,
  isShow?: boolean
  children?: FormModelInterface[];
}


export interface AboutMeInterface {
  name: string,
  family: string,
  age: string,
  location: string,
  language: string
}
