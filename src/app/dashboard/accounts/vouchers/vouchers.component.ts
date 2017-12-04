import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule } from 'devextreme-angular';
import { VoucherClass, AccountsService, Currency } from '../accounts.service';
import ArrayStore from 'devextreme/data/array_store';
import { AppSettingsService } from '../../../Services/App-settings.Service';
import { GLOBAL } from '../../../shared/global';
import { CurrencyCode, OfficeCode, JournalCodeList } from '../../../Models/CodeModel';
import { ToastrService } from 'ngx-toastr';
import { commonService } from '../../../Services/common.service';
import { DocumentComponent } from './document/document.component';

@Component({
    selector: 'app-vouchers',
    templateUrl: './vouchers.component.html',
    styleUrls: ['./vouchers.component.css'],

})
export class VouchersComponent implements OnInit {

    // @ViewChild(DocumentComponent) abc:  DocumentComponent;
   
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    vouchers: VoucherClass[];
    currencyModel: CurrencyCode[];
    officeCodeModel: OfficeCode[];
    journalcodelist: JournalCodeList[];
    voucherTypeArr: any[];
    voucherDetails: any[];
    selectedVoucherNo: any;
    popupVisibleDocument = false;

    // set voucher no
    voucherNoMain: any;
    //get all methods from DocumentComponent

    voucherDocumentDetails: Document[];

    //private documentComponent: DocumentComponent,
    constructor(private accountservice: AccountsService, private setting: AppSettingsService, private toastr: ToastrService, private commonservice: commonService) {

        // Voucher Type Static array
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

    ngAfterViewInit() {
        //this.child.GetVoucherDocumentList();
    }

    //TODO: Event for ADD, UPDATE, DELETE
    logEvent(eventName, obj) {
        if (eventName == "RowUpdating") {
            var value = Object.assign(obj.oldData, obj.newData);     // Merge old data with new Data 
            this.EditVoucher(value);
            this.getAllVoucherDetails();
        }

        else if (eventName == "RowInserting") {
            this.AddVoucher(obj.data);
            this.getAllVoucherDetails();
        }

        else {
            //delete the row functionality
        }
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
                else {
                }
            }
        )
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
                else {
                }
            }
        )
    }

    //Get Currency Code in Add, Edit Dropdown 
    getCurrencyCodeList() {
        this.accountservice.GetAllCurrencyCodeList(this.setting.getBaseUrl() + GLOBAL.API_CurrencyCodes_GetAllCurrency).subscribe(
            data => {
                this.currencyModel = [];
                if (data.data.CurrencyList != null) {
                    data.data.CurrencyList.forEach(element => {
                        this.currencyModel.push({
                            CurrencyId: element.CurrencyId,
                            CurrencyCode: element.CurrencyCode,
                            CurrencyName: element.CurrencyName,
                            CurrencyRate: element.CurrencyRate
                        });
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

    //Get Office Code in Add, Edit Dropdown 
    getOfficeCodeList() {
        this.accountservice.GetAllOfficeCodeList(this.setting.getBaseUrl() + GLOBAL.API_OfficeCode_GetAllOfficeDetails).subscribe(
            data => {
                if (data.data.OfficeDetailsList != null) {
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

    //Get Journal Code in Add, Edit Dropdown
    getJournalCodeList() {
        this.accountservice.GetAllJournalCodeList(this.setting.getBaseUrl() + GLOBAL.API_JournalCode_GetAllJournalDetail).subscribe(
            data => {
                if (data.data.JournalDetailList != null) {
                    this.journalcodelist = [];
                    data.data.JournalDetailList.forEach(element => {
                        this.journalcodelist.push({ JournalCode: element.JournalCode, JournalName: element.JournalName });
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

    //Get voucher details list
    getAllVoucherDetails() {
        this.accountservice.GetAllVoucherDetails(this.setting.getBaseUrl() + GLOBAL.API_Accounting_GetAllVoucherDetails).subscribe(
            data => {
                if (data.data.VoucherDetailList != null) {
                    this.voucherDetails = [];
                    data.data.VoucherDetailList.forEach(element => {
                        this.voucherDetails.push({
                            VoucherNo: element.VoucherNo,
                            VoucherDate: element.VoucherDate,
                            VoucherRefNo: element.ReferenceNo,
                            Office: element.OfficeId,
                            ChequeNo: element.ChequeNo,
                            Journal: element.JournalCode,
                            VoucherType: element.VoucherTypeId,
                            Description: element.Description,
                            Currency: element.CurrencyId
                        });
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
                else {
                }
            }
        )
    }

    //Alpit -- 4/12/2017
    //Vouchers Document details popup trigger
    onRowClickEvent(data) {

        //use in document using input binding
        this.voucherNoMain = data.VoucherNo;
        localStorage.setItem("SelectedVoucherNumber", data.VoucherNo);

        this.GetVoucherDocumentList();

        this.popupVisibleDocument = true;
    }

    onCancelVoucherDocument() {
        this.popupVisibleDocument = false;
    }
}
