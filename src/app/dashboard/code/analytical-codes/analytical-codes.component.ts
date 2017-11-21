import { Component, OnInit } from '@angular/core';
import { CodeService, AnalyticalCode } from '../code.service';
import { Tab } from '../../accounts/accounts.service';
// import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-analytical-codes',
  templateUrl: './analytical-codes.component.html',
  styleUrls: ['./analytical-codes.component.css']
})
export class AnalyticalCodesComponent implements OnInit {

  tabContent: string;
  showSelectedTab = 0;

  tabs: Tab[] = [
    {
      id: 0,
      text: "Donor Budget Line"
    },
    {
      id: 1,
      text: "Areas"
    },
    {
      id: 2,
      text: "Sectors"
    },
    {
      id: 3,
      text: "Programs"
    },
    {
      id: 4,
      text: "Projects"
    },
    {
      id: 5,
      text: "Jobs"
    },
    {
      id: 6,
      text: "Cost Books"
    }
  ];
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;
  tab6: any;
  tab7: any;

  dataSource: any;
  showFilterRow: boolean;
  data: any;

  //Edit popup
  popupVisibleEditAnalyticalCodes = false;

  //Edit form
  analyticalCodes: AnalyticalCode[];
  accountType: string[];
  accountLevel: string[];

  constructor(private codeService: CodeService) {
    this.showFilterRow = true;

    //TODO: Edit popup dropdown
    this.analyticalCodes = this.codeService.getAnalyticalCodes();

    console.log(this.accountLevel);

    // this.data = new ArrayStore({
    //     data: this.analyticalCodes,
    //     key: "ID"
    // });


    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.codeService.getAnalyticalCodes()
      }


    }
    this.data = {
      data: this.accountLevel,
      key: "ID"
    };

    this.showFilterRow = true;
    
    this.tab1 = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.codeService.getAnalyticalCodes()
      }
    }

    this.tab5 = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.codeService.getProjectTabs()
      }
    }
    // this.tab2 = {
    //   store: {
    //     type: 'array',
    //     key: 'ID',
    //     data: this.codeService.getAnalyticalCodes()
    //   }
    // }
    // this.tab3 = {
    //   store: {
    //     type: 'array',
    //     key: 'ID',
    //     data: this.codeService.getAnalyticalCodes()
    //   }
    // }
    // this.tab4 = {
    //   store: {
    //     type: 'array',
    //     key: 'ID',
    //     data: this.codeService.getAnalyticalCodes()
    //   }
    // }
    // this.tab5 = {
    //   store: {
    //     type: 'array',
    //     key: 'ID',
    //     data: this.codeService.getAnalyticalCodes()
    //   }
    // }


  }


  ngOnInit() {
  }

  completedValue(rowData) {
    return rowData.Status == "Completed";
  }

  //model
  editAnalyticalCodes() {
    this.popupVisibleEditAnalyticalCodes = true;
  }

  selectTab(e) {
    this.showSelectedTab = e.itemIndex;
    debugger;
      // this.tabContent = this.tabs[e.itemIndex].content;
  }


}
