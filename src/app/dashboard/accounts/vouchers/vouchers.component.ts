import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { AppSettingsService } from '../../../Services/App-settings.Service';
import { GLOBAL } from '../../../shared/global';
import { ToastrService } from 'ngx-toastr';
import { DocumentComponent } from './document/document.component';
import { CodeService } from '../../code/code.service';

@Component({
    selector: 'app-vouchers',
    templateUrl: './vouchers.component.html',
    styleUrls: ['./vouchers.component.css'],

})
export class VouchersComponent implements OnInit {
    currencyModel: any[];
    officeCodeModel: any[];
    journalcodelist: any[];
    voucherTypeArr: any[];
    voucherDetails: any[];
    selectedVoucherNo: any;                 //Store VoucherNo to localStorage
    voucherNoMain: any;                     // set voucherNo on Popup
    voucherDocumentDetails: Document[];
    popupVisibleDocument = false;

    constructor(private accountservice: AccountsService,private codeservice: CodeService, private setting: AppSettingsService, private toastr: ToastrService) {
        // VoucherType Static array
        this.voucherTypeArr = [{"VoucherTypeId": 1,"VoucherTypeName": "Journal"},
                               { "VoucherTypeId": 2,"VoucherTypeName": "Adjustment"}];
    }

    ngOnInit() {
        this.getCurrencyCodeList();
        this.getOfficeCodeList();
        this.getJournalCodeList();
        this.getAllVoucherDetails();
    }

    //TODO: Event for ADD, UPDATE, DELETE
    logEvent(eventName, obj) {
        if (eventName == "RowUpdating") {
            var value = Object.assign(obj.oldData, obj.newData);     // Merge old data with new Data 
            this.EditVoucher(value);
        }
        else if (eventName == "RowInserting") {
            this.AddVoucher(obj.data);
        }        
        this.getAllVoucherDetails();
    }

    AddVoucher(obj) {
        this.accountservice.AddVoucher(this.setting.getBaseUrl() + GLOBAL.API_Accounting_AddVouchers, obj).subscribe(
            data => {
                if (data.StatusCode == 200) {
                    this.toastr.success("Voucher Added Successfully!!!");
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
            }
        );
    }

    EditVoucher(value) {
        this.accountservice.EditVoucher(this.setting.getBaseUrl() + GLOBAL.API_Accounting_EditVouchers, value).subscribe(
            data => {
                if (data.StatusCode == 200) {
                    this.toastr.success("Voucher Updated Successfully!!!");
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
            }
        );
    }

    //Get Currency Code in Add, Edit Dropdown 
    getCurrencyCodeList() {
        this.codeservice.GetAllCodeList(this.setting.getBaseUrl() + GLOBAL.API_CurrencyCodes_GetAllCurrency).subscribe(
            data => {
                this.currencyModel = [];
                if (data.data.CurrencyList != null) {
                    data.data.CurrencyList.forEach(element => {
                        this.currencyModel.push(element);
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
            }
        )
    }

    //Get Office Code in Add, Edit Dropdown 
    getOfficeCodeList() {
        this.codeservice.GetAllCodeList(this.setting.getBaseUrl() + GLOBAL.API_OfficeCode_GetAllOfficeDetails).subscribe(
            data => {
                if (data.data.OfficeDetailsList != null) {
                    this.officeCodeModel = [];
                    data.data.OfficeDetailsList.forEach(element => {
                        this.officeCodeModel.push(element);
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
            }
        )
    }

    //Get Journal Code in Add, Edit Dropdown
    getJournalCodeList() {
        this.codeservice.GetAllCodeList(this.setting.getBaseUrl() + GLOBAL.API_JournalCode_GetAllJournalDetail).subscribe(
            data => {
                if (data.data.JournalDetailList != null) {
                    this.journalcodelist = [];
                    data.data.JournalDetailList.forEach(element => {
                        this.journalcodelist.push(element);
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
            }
        )
    }

    //Get voucher details list
    getAllVoucherDetails() {
        this.accountservice.GetAllVoucherDetails(this.setting.getBaseUrl() + GLOBAL.API_Accounting_GetAllVoucherDetails).subscribe(
            data => {
                if (data.data.VoucherDetailList != null) {
                    this.voucherDetails = [];
                    data.data.VoucherDetailList.forEach(element => {
                        this.voucherDetails.push(element);
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
            }
        );
    }

    GetVoucherDocumentList() {

        this.accountservice.GetVoucherDocumentDetails(this.setting.getBaseUrl() + GLOBAL.API_Accounting_GetVoucherDocumentDetail, localStorage.getItem("SelectedVoucherNumber")).subscribe(
            data => {
                if (data.StatusCode == 200) {
                    this.voucherDocumentDetails = [];
                    data.data.VoucherDocumentDetailList.forEach(element => {
                        this.voucherDocumentDetails.push(element);
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
            }
        )
    }

    //Alpit -- 4/12/2017
    //Vouchers Document details popup trigger
    onRowClickEvent(data) {
        //use in document using input binding
        this.voucherNoMain = data.VoucherRefNo;
        localStorage.setItem("SelectedVoucherNumber", data.VoucherNo);
        this.GetVoucherDocumentList();
        this.popupVisibleDocument = true;
    }

    sendRowData(rowData)
    {
        localStorage.setItem("SelectedVoucherNumber", rowData.key.VoucherNo);        
        localStorage.setItem("SelectedVoucherCurrency", rowData.key.CurrencyId);                
        localStorage.setItem("SelectedOfficeId", rowData.key.OfficeId);
    }

    onCancelVoucherDocument() {
        this.popupVisibleDocument = false;
    }
}
