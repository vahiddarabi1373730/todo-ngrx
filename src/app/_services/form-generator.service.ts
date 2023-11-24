import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormModelInterface} from "../_model/models.interface";

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor() {
  }

  private createFormControl(defaultValue: any, validation: any): FormControl {
    return new FormControl(defaultValue, validation)
  }

  public createFormGroup(fields: FormModelInterface[]): FormGroup {
    const fg: { [key: string]: any } = {}
    fields.forEach(field => {
      if (field.type === 'fc') {
        fg[field.name] = this.createFormControl(field.defaultValue ? field.defaultValue : null, field.validation)
      } else if (field.type === 'fg' && field.children) {
        fg[field.name] = this.createFormGroup(field.children)
      }
    })
    return new FormGroup(fg)
  }

}
