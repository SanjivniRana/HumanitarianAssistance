import { Component, OnInit } from '@angular/core';
import { DxTabsModule, DxSelectBoxModule } from 'devextreme-angular';
import { AccountsService, Tab } from '../accounts.service';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.css']
})
export class FinancialReportComponent implements OnInit {
  tabContent: string;
  showSelectedTab = 0;
  tabs: Tab[];
  showFilterRow: boolean;
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;
  constructor(private accountservice:AccountsService) { 
    this.tabs = this.accountservice.getTabs();
    this.showFilterRow = true;
    this.tab1 = {
        store: {
            type: 'array',
            key: 'ID',
            data: this.accountservice.getFinancial_COA()
        }
    }
    this.tab2 = {
      store: {
          type: 'array',
          key: 'ID',
          data: this.accountservice.getFinancial_Notes()
      }
  }
  this.tab3 = {
      store: {
          type: 'array',
          key: 'ID',
          data: this.accountservice.getFinancial_BalanceSheet()
      }
  }
    this.tab4 = {
      store: {
          type: 'array',
          key: 'ID',
          data: this.accountservice.getFinancial_Income()
      }
    }
    this.tab5 = {
      store: {
          type: 'array',
          key: 'ID',
          data: this.accountservice.getFinancial_DetailsNotes()
      }
    }
  }

  selectTab(e) {
    this.showSelectedTab = e.itemIndex;
    debugger;
      // this.tabContent = this.tabs[e.itemIndex].content;
  }

  ngOnInit() {
  }

}
