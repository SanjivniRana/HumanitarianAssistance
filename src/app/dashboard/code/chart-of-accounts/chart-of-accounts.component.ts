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

import { CodeService, ChartOfAccount } from '../code.service';

@Component({
  selector: 'app-chart-of-accounts',
  templateUrl: './chart-of-accounts.component.html',
  styleUrls: ['./chart-of-accounts.component.css']
})

export class ChartOfAccountsComponent implements OnInit {
  dataSource: any;
  showFilterRow: boolean;
  data: any;

  //Edit popup
  popupVisibleEditChartOfAccount = false;

  //Edit form
  chartOfAccounts: ChartOfAccount[];
  accountType: string[];
  accountLevel: string[];
  // accountLevel: AccountLevelDropdowns[];

  constructor(private codeService: CodeService) {
    this.showFilterRow = true;

    //TODO: Edit popup
    this.chartOfAccounts = this.codeService.getChartOfAccounts();
    this.accountType = this.codeService.getAccountTypeDropdown();

    this.accountLevel = this.codeService.getAccountLevelDropdowns();

    console.log(this.accountLevel);


    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.codeService.getChartOfAccounts()
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

  cancelDeleteVoucher()
  {
      this.popupVisibleEditChartOfAccount = false;      
  }

}
