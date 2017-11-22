import { Component, OnInit } from '@angular/core';
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

import { CodeService, ChartOfAccountLevel, AccountType } from '../code.service';

@Component({
  selector: 'app-chart-of-accounts',
  templateUrl: './chart-of-accounts.component.html',
  styleUrls: ['./chart-of-accounts.component.css']
})

export class ChartOfAccountsComponent implements OnInit {
  dataSource: any;
  showFilterRow: boolean;
  data: any;

  //Use for event handling 
  events: Array<string> = [];

  //Edit popup
  popupVisibleEditChartOfAccount = false;

  //Edit form
  chartOfAccounts: ChartOfAccountLevel[];
  accountType: AccountType[];
  //accountLevel: string[];
  // accountLevel: AccountLevelDropdowns[];

  constructor(private codeService: CodeService) {
    this.showFilterRow = true;

    //TODO: Edit popup
    this.chartOfAccounts = this.codeService.getChartOfAccountLevels();
    this.accountType = this.codeService.getAccountTypes();

    //this.accountLevel = this.codeService.getAccountLevelDropdowns();

    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.codeService.getChartOfAccountLevels()
      }


    }
    // this.accountLevel    
    // this.data = {
    //   data: this.accountLevel,
    //   key: "ID"
    // };
  }


  ngOnInit() {
  }

  completedValue(rowData) {
    return rowData.Status == "Completed";
  }

  editChartOfAccount() {
    this.popupVisibleEditChartOfAccount = true;
  }

  cancelDeleteVoucher() {
    this.popupVisibleEditChartOfAccount = false;
  }

  //TODO: Event for ADD, UPDATE, DELETE
  logEvent(eventName) {
    debugger;
    this.events.unshift(eventName);
  }

}
