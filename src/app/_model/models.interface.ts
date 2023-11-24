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
