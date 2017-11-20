import { Component, OnInit } from '@angular/core';
import { ChartOfAccount, CodeService, AnalyticalCode } from '../code.service';

@Component({
  selector: 'app-analytical-codes',
  templateUrl: './analytical-codes.component.html',
  styleUrls: ['./analytical-codes.component.css']
})
export class AnalyticalCodesComponent implements OnInit {


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



}
