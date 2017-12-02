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
import { AccountsService, Ledger } from '../accounts.service';
import { AppSettingsService } from '../../../Services/App-settings.Service';
import { ToastrService } from 'ngx-toastr';
import { commonService } from '../../../Services/common.service';
import { GLOBAL } from '../../../shared/global';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html'
})
export class LedgerComponent implements OnInit {  
  dataSource: Ledger[];

  constructor(private accountservice: AccountsService, private setting: AppSettingsService, private toastr: ToastrService, private commonservice: commonService) {

  }
  ngOnInit() {
    this.GetLedgerDetails();
  }

  GetLedgerDetails()
  {
    this.accountservice.GetAllCurrencyCodeList(this.setting.getBaseUrl() + GLOBAL.API_Accounting_GetAllLedgerDetails).subscribe(
      data => {
        debugger;
          this.dataSource = [];
          if(data.StatusCode == 200)
          {
              data.data.LedgerList.forEach(element => {
                  this.dataSource.push(element);
                  // console.log(element);
              }); 
          }               
      },
      error => {
          if (error.StatusCode == 500) {
              this.toastr.error("Internal Server Error....");
          }
          else if (error.StatusCode == 401) {
              this.toastr.error("Unauthorized Access Error....");
          }
          else if (error.StatusCode == 403) {
              this.toastr.error("Forbidden Error....");
          }
          else {
          }
      }
  )
  }

}