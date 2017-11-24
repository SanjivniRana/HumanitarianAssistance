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

import { CodeService, MainLevelAccount } from '../code.service';

@Component({
  selector: 'app-chart-of-accounts',
  templateUrl: './chart-of-accounts.component.html',
  styleUrls: ['./chart-of-accounts.component.css']
})

export class ChartOfAccountsComponent implements OnInit { 

  ngOnInit() {
  }

  mainLevelAccount: MainLevelAccount[];

  constructor(service: CodeService) {
    this.mainLevelAccount = service.getMainLevelAccounts();
  }
}