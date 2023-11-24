import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ColDef, GridOptions, GridSizeChangedEvent} from "ag-grid-community";

@Component({
  selector: 'app-grid-generator',
  templateUrl: './grid-generator.component.html',
  styleUrls: ['./grid-generator.component.scss']
})
export class GridGeneratorComponent implements OnInit, OnDestroy, AfterViewInit {

  private _rowData: any[] | null | undefined;
  private _gridOptions: GridOptions | undefined;

  @Input() set rowData(rowData: any[] | null) {
    this._rowData = rowData
  }

  @Input() set gridOptions(gridOption: GridOptions) {
    gridOption = {
      ...gridOption, onGridSizeChanged(event: GridSizeChangedEvent<any>) {
        gridOption.api?.sizeColumnsToFit()
      }
    }
    this._gridOptions = gridOption
  }

  get rowData() {
    return this._rowData as any[]
  }

  get gridOptions() {
    return this._gridOptions as GridOptions
  }

  onGridReady(event: any) {
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

}
