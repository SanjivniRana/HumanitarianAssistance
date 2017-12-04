import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DxDataGridComponent, DxTextBoxModule, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule, DxFileUploaderModule } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../../accounts.service';
import { commonService } from '../../../../Services/common.service';
import { AppSettingsService } from '../../../../Services/App-settings.Service';
import { ToastrService } from 'ngx-toastr';
import { GLOBAL } from '../../../../shared/global';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
})

export class DocumentComponent implements OnInit {
    // dataSource: any[];
    popupVisible = false;
    addNewDocument: any;
    voucherNumber: any;
   // voucherDocumentDetails: Document[];

    imageURL: string;
    imageData = { Image: "" }

    //Get Data From Voucher 
    @Input() VoucherNo: any;
    @Input() voucherDocumentDetails: Document[];

    constructor(private accountservice: AccountsService, private setting: AppSettingsService, private toastr: ToastrService, private router: Router, private fb: FormBuilder, private commonservice: commonService, private _DomSanitizer: DomSanitizer) {
        this.voucherNumber = this.commonservice.voucherNumber;
        this.addNewDocument = {
            DocumentName: "",
            DocumentFilePath: "",
            DocumentDate: ""
        };

    }

    ngOnInit() {
        // localStorage.setItem("SelectedVoucherNumber", this.VoucherNo);
        this.GetVoucherDocumentList();
    }

    addDocument() {
        this.popupVisible = true;
    }

    cancelDeleteVoucher() {
        this.popupVisible = false;
    }
    
    backToVouchers() {
        this.router.navigate(['../vouchers']);
    }

    getfilename(data) {
        return data["key"].DocumentName;
    }

    filePath(data) {
        return this._DomSanitizer.bypassSecurityTrustUrl(data["key"].FilePath);
    }
  
    //Event Fire on image Selection
    onImageSelect(event: any) {
        var file: File = event.value[0];
        var myReader: FileReader = new FileReader();
        myReader.readAsDataURL(file);
        myReader.onloadend = (e) => {
            this.imageURL = myReader.result;
            console.log('Path --> ', this.imageURL);
        }
    }

    // Add Document with file uploader
    onFormSubmit(data: any) {
        this.addNewDocument.DocumentFilePath = this.imageURL;
        data.VoucherNo = localStorage.getItem("SelectedVoucherNumber");
        this.AddVoucherDocument(data);
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

    //Add New Voucher Document
    AddVoucherDocument(data) {
        this.accountservice.AddVoucherDocument(this.setting.getBaseUrl() + GLOBAL.API_Accounting_AddVouchersDocument, data).subscribe(
            data => {
                if (data.StatusCode == 200) {
                    this.toastr.success("Document Added Successfully!!!");
                }
                this.GetVoucherDocumentList();
                this.cancelDeleteVoucher();
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
        this.GetVoucherDocumentList();
    }

}
