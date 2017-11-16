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
    selector: 'app-ledger',
    templateUrl: './ledger.component.html'
  })
  export class LedgerComponent implements OnInit { 
    dataSource: any;
    constructor(private accountservice:AccountsService){
        this.dataSource = {
            store: {
                type: 'array',
                key: 'ID',
                data: this.accountservice.getLedger()
            }
        }
    }
    ngOnInit() {
    }
  }