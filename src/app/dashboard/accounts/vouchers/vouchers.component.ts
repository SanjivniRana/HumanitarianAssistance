import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule } from 'devextreme-angular';
import { VoucherClass, AccountsService, Employee, Customer, Currency } from '../accounts.service';
import ArrayStore from 'devextreme/data/array_store';
import { AppSettingsService } from '../../../Services/App-settings.Service';
import { GLOBAL } from '../../../shared/global';
import { CurrencyCode, OfficeCode, JournalCodeList } from '../../../Models/CodeModel';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-vouchers',
    templateUrl: './vouchers.component.html',
    styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {

    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    vouchers: VoucherClass[];
    currencyModel: CurrencyCode[];
    officeCodeModel: OfficeCode[];
    journalcodelist: JournalCodeList[];
    voucherTypeArr: any[];
    voucherDetails: any[];    

    //Use for event handling 
    events: Array<string> = [];

    constructor(private accountservice: AccountsService, private setting: AppSettingsService, private toastr: ToastrService) {
        this.vouchers = accountservice.getVouchersList();

        //Static value for voucherType Control in add/edit popup
        this.voucherTypeArr = [
            {
                "VoucherTypeId": 1,
                "VoucherTypeName": "Journal"
            },
            {
                "VoucherTypeId": 2,
                "VoucherTypeName": "Adjustment"
            }
        ];
    }

    ngOnInit() {
        this.getCurrencyCodeList();
        this.getOfficeCodeList();
        this.getJournalCodeList();
        this.getAllVoucherDetails();
    }

    //TODO: Event for ADD, UPDATE, DELETE
    logEvent(eventName) {
        debugger;
        this.events.unshift(eventName);
    }

    //Get Currency Code in Add, Edit Dropdown 
    getCurrencyCodeList() {
        this.accountservice.GetAllCurrencyCodeList(this.setting.getBaseUrl() + GLOBAL.API_CurrencyCodes_GetAllCurrency).subscribe(
            data => {
                this.currencyModel = [];
                data.data.CurrencyList.forEach(element => {
                    this.currencyModel.push({
                        CurrencyId: element.CurrencyId,
                        CurrencyCode: element.CurrencyCode,
                        CurrencyName: element.CurrencyName,
                        CurrencyRate: element.CurrencyRate
                    });
                });
                console.log(this.currencyModel);
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

    //Get Office Code in Add, Edit Dropdown 
    getOfficeCodeList() {
        this.accountservice.GetAllOfficeCodeList(this.setting.getBaseUrl() + GLOBAL.API_OfficeCode_GetAllOfficeDetails).subscribe(
            data => {
                this.officeCodeModel = [];
                data.data.OfficeDetailsList.forEach(element => {
                    this.officeCodeModel.push({
                        OfficeId: element.OfficeId,
                        OfficeCode: element.OfficeCode,
                        OfficeName: element.OfficeName,
                        SupervisorName: element.SupervisorName,
                        PhoneNo: element.PhoneNo,
                        FaxNo: element.FaxNo
                    });
                });
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

    //Get Journal Code in Add, Edit Dropdown
    getJournalCodeList() {
        this.accountservice.GetAllJournalCodeList(this.setting.getBaseUrl() + GLOBAL.API_JournalCode_GetAllJournalDetail).subscribe(
            data => {                
                this.journalcodelist = [];
                data.data.JournalDetailList.forEach(element => {
                    this.journalcodelist.push({ JournalCode: element.JournalCode, JournalName: element.JournalName });
                });
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

    getAllVoucherDetails() {
        this.accountservice.GetAllVoucherDetails(this.setting.getBaseUrl() + GLOBAL.API_Accounting_GetAllVoucherDetails).subscribe(
            data => {
                debugger;                
                this.voucherDetails = [];
                data.data.VoucherDetailList.forEach(element => {
                    this.voucherDetails.push({                        
                        VoucherNo: element.VoucherNo,
                        VoucherDate: element.VoucherDate,
                        VoucherRefNo: element.ReferenceNo,
                        Office:element.OfficeId,
                        // Office: element.OfficeName,
                        Journal: element.JournalCode,
                        // Journal: element.JournalName,
                        Description: element.Description,
                        CurrencyCode: element.CurrencyCode
                     });
                });
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
