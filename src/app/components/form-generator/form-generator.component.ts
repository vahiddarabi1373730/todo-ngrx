import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormModelInterface} from "../../_model/models.interface";

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  private _form!: FormGroup;
  @Input() set form(form: FormGroup) {
    this._form = form
  }

  get form() {
    return this._form
  }

  @Input() fields!: FormModelInterface[];


  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
