import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxFormComponent,
  DxPopupModule, DxTemplateModule,
  DxTemplateHost
} from 'devextreme-angular';
import { AccountsService, Employee, Customer } from '../accounts.service';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  //   dataSource: any;
  //   showFilterRow: boolean;
  //   constructor(private accountservice:AccountsService) { 
  //     this.showFilterRow = true;
  //     this.dataSource = {
  //         store: {
  //             type: 'array',
  //             key: 'ID',
  //             // data: this.accountservice.getEmployees()
  //             data: this.accountservice.getJournalData()
  //         }
  //     }
  //   }
  //   completedValue(rowData) { 
  //     return rowData.Status == "Completed";
  // }
  //   ngOnInit() {
  //   }

  // }

  pivotGridDataSource: any;
  drillDownDataSource: any;
  salesPopupVisible = false;
  salesPopupTitle = "";

  constructor(service: AccountsService) {

    this.pivotGridDataSource = new PivotGridDataSource({
      fields: [
        {
          caption: "Journal",
          width: 120,
          dataField: "journal",
          area: "row"
        }, {
          caption: "Voucher",
          dataField: "voucher",
          width: 150,
          showTotals: true,
          area: "row"
        }, {
          caption: "Transaction",
          dataField: "transaction",
          width: 150,
          area: "row"
        }, {
          dataField: "transactionType",
          dataType: "string",
          area: "column"
        }, {
          caption: "Total",
          dataField: "amount",
          dataType: "number",
          summaryType: "sum",
          format: "currency",
          area: "data"
        }
      ],
      store: service.getJournals()
    });
  }


  onPivotCellClick(e) {
    if (e.area == "data") {
      var rowPathLength = e.cell.rowPath.length,
        rowPathName = e.cell.rowPath[rowPathLength - 1];

      this.drillDownDataSource = this.pivotGridDataSource.createDrillDownDataSource(e.cell);
      // this.salesPopupTitle = (rowPathName ? rowPathName : "Total") + " Drill Down Data";
      this.salesPopupTitle = ("Total") + " Drill Down Data";
      this.salesPopupVisible = true;
    }
  }


  onCellPrepared(e) {
    console.log(e);
  }

  ngOnInit() {
  }

}

