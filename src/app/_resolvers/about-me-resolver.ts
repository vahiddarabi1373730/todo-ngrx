import {Resolve} from "@angular/router";
import {AboutMeInterface} from "../_model/models.interface";
import {AboutService} from "../_services/about.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AboutMeResolver implements Resolve<AboutMeInterface> {

  constructor(private aboutService: AboutService) {
  }

  resolve(): Observable<AboutMeInterface> {
    return this.aboutService.getAbout()
  }
}
