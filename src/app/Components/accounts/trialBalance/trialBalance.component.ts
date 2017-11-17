import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent,
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
  import { Order, AccountsService, Employee, Customer } from '../accounts.service';

  @Component({
    selector: 'app-trialBalance',
    templateUrl: './trialBalance.component.html'
  })
  export class TrailBalanceComponent implements OnInit { 
    dataSource: any;
    showFilterRow: boolean;
    constructor(private accountservice:AccountsService){
      this.showFilterRow = true;
        this.dataSource = {
            store: {
                type: 'array',
                key: 'ID',
                data: this.accountservice.getTrailBalance()
            }
        }
    }
    ngOnInit() {
    }
  }