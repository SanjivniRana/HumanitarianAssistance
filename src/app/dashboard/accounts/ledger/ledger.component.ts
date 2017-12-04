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
  DxTemplateHost,
  DxTreeListModule
} from 'devextreme-angular';
import { AccountsService, Employee, Customer, Currency } from '../accounts.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html'
})
export class LedgerComponent implements OnInit {
  dataSource: any;
  showFilterRow: boolean;
  
  accountLevelDropdown: Currency[];

  constructor(private accountservice: AccountsService) {
    this.showFilterRow = true;
    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.accountservice.getLedger()
      }
    }

    
    this.accountLevelDropdown = this.accountservice.getCurrencies();
  }
  ngOnInit() {
  }

}