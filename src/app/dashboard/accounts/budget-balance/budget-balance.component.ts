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
  import { AccountsService, Customer } from '../accounts.service';

@Component({
  selector: 'app-budget-balance',
  templateUrl: './budget-balance.component.html',
  styleUrls: ['./budget-balance.component.css']
})
export class BudgetBalanceComponent implements OnInit {
  dataSource: any;
  showFilterRow: boolean;
  BudgetHeaderFilter: any;
  constructor(private accountservice:AccountsService) {
    this.showFilterRow = true;
    this.dataSource = {
        store: {
            type: 'array',
            key: 'ID',
            data: this.accountservice.getBudgetBalance()
        }
    };
    this.BudgetHeaderFilter = [{
      text: "Less than 3000",
      value: ["Budget", "<", 3000]
  }, {
      text: "3000 - 5000",
      value: [
          ["Budget", ">", 3000],
          ["Budget", "<=", 5000]
      ]
  }, {
      text: "5000 - 10000",
      value: [
          ["Budget", ">", 5000],
          ["Budget", "<=", 10000]
      ]
  }, {
      text: "10000 - 20000",
      value: [
          ["Budget", ">", 10000],
          ["Budget", "<=", 20000]
      ]
  }, {
      text: "Greater than 20000",
      value: ["Budget", ">", 20000]
  }];
   }

  ngOnInit() {
  }

}
