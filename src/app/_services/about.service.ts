import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AboutMeInterface} from "../_model/models.interface";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) {
  }

  public getAbout(): Observable<AboutMeInterface> {
    return this.http.get<AboutMeInterface>('http://localhost:4200/assets/about.json')
  }
}
