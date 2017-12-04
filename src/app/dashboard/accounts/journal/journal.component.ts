import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule, DxTemplateHost} from 'devextreme-angular';
import { AccountsService, Customer, JournalVoucherModel } from '../accounts.service';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { ToastrService } from 'ngx-toastr';
import { AppSettingsService } from '../../../Services/App-settings.Service';
import { GLOBAL } from '../../../shared/global';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  pivotGridDataSource: any;
  drillDownDataSource: any;
  journalVoucher: JournalVoucherModel[];

  constructor(private accountservice: AccountsService, private setting: AppSettingsService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.GetAllJournalDetails();
  }

  GetAllJournalDetails() {
    this.accountservice.GetAllJournalDetails(this.setting.getBaseUrl() + GLOBAL.API_Accounting_GetAllJournalDetails).subscribe(
      data => {
        if (data.StatusCode == 200) {
          this.journalVoucher = [];
          data.data.JournalVoucherViewList.forEach(element => {
            this.journalVoucher.push(element);
          });
          this.pivotGridDataSource = new PivotGridDataSource({
            fields: [
              {
                caption: "Journal",
                width: 120,
                dataField: "JournalCode",
                showTotals: false,
                area: "row"
              }, {
                caption: "Voucher",
                dataField: "VoucherNo",
                width: 150,

                area: "row"
              },
              {
                caption: "Transaction No.",
                dataField: "TransactionNo",
                showTotals: false,
                width: 150,
                area: "row"
              },
              {
                caption: "Account Code",
                dataField: "AccountCode",
                showTotals: false,
                width: 150,
                area: "row"
              },
              {
                caption: "Transaction Date",
                dataField: "TransactionDate",
                width: 150,
                area: "row"
              },
              {
                dataField: "TransactionType",
                dataType: "string",
                area: "column"
              }, {
                caption: "Total",
                dataField: "Amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
              }
            ],
            store: this.journalVoucher
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

