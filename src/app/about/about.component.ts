import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AboutMeInterface} from "../_model/models.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private activatedRoute: ActivatedRoute) {
  }

  protected aboutMe: Observable<AboutMeInterface> = this.activatedRoute.data.pipe(map((data: any) => data.aboutMe));

}
