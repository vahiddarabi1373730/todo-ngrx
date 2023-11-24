import {Component, OnInit} from '@angular/core';
import {TodoServices} from "./_services/todo.services";
import {FormModelInterface} from "./_model/models.interface";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoServices) {
  }

  private formField: FormModelInterface[] = [
    {name: "id", type: 'fc', validation: Validators.required, isShow: false},
    {
      name: "name", type: 'fg', validation: Validators.required, children: [
        {name: 'fullName', type: 'fc', validation: Validators.required},
        {name: 'lastName', type: 'fc', validation: Validators.required},
      ]
    },
    {name: "time", type: 'fc', validation: Validators.required},
    {name: "duration", type: 'fc', validation: Validators.required}
  ]

  ngOnInit() {
  }
}
