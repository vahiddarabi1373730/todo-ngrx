import {Component} from '@angular/core';
import {MenuService} from "../../../_services/menu.service";
import {Observable} from "rxjs";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {FlatTreeControl} from '@angular/cdk/tree';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  route: any

}

interface FoodNode {
  name: string;
  children?: FoodNode[];
  route?: string | undefined

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  protected isOpenMenuTree: Observable<boolean> = this.menuService.isOpenMenuTree$$
  private MENU_DATA: FoodNode[] = [
    {name: "Template", children: [{name: "Template", children: [], route: ''}], route: ''},
    {name: "Grid", children: [{name: "Grid", children: [], route: 'grid'}], route: 'grid'}
  ]
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      route: node.route
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  constructor(private menuService: MenuService) {
    this.dataSource.data = this.MENU_DATA;
  }

  protected hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  protected dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


}
