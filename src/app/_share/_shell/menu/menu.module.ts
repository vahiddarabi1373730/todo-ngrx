import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule, MatButtonModule, RouterLink, MatIconModule, MatMenuModule, MatTreeModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {
}
