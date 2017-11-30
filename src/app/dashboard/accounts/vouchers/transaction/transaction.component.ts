import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule, DxFileUploaderModule } from 'devextreme-angular';
import { FormBuilder } from '@angular/forms';
import { AccountsService, VoucherTransaction } from '../../accounts.service';
import { VouchersComponent } from '../vouchers.component';
import { commonService } from '../../../../Services/common.service';
import { ToastrService } from 'ngx-toastr';
import { AppSettingsService } from '../../../../Services/App-settings.Service';
import { GLOBAL } from '../../../../shared/global';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    providers: [VouchersComponent]
})
export class TransactionComponent implements OnInit {
    dataSource: VoucherTransaction[];
    voucherNumber: any;
    DebitAccount: any[];
    CreditAccount: any[];

    constructor(private accountservice: AccountsService, private router: Router, private setting: AppSettingsService, private toastr: ToastrService, private fb: FormBuilder, private voucherComponent: VouchersComponent, private commonservice: commonService) {
        this.dataSource = this.accountservice.getVoucherTransactionModel();
        this.voucherNumber = this.commonservice.voucherNumber;
        this.DebitAccount = [
            {
                "DebitAccount": 410101
            },
            {
                "DebitAccount": 410102
            },
            {
                "DebitAccount": 410103
            }
        ];

        this.CreditAccount = [
            {
                "CreditAccount": 510101
            },
            {
                "CreditAccount": 510102
            },
            {
                "CreditAccount": 510103
            }
        ];
    }
    ngOnInit() {
    }

    logEvent(eventName, obj) {
        debugger;
        obj.data.VoucherNo = this.voucherNumber;
        if(eventName == "RowInserting")
        {
            this.AddVoucherTransaction(obj.data);
        }
        
    }

    AddVoucherTransaction(data)
    {
        this.accountservice.AddVoucherTransaction(this.setting.getBaseUrl() + GLOBAL.API_Accounting_AddVouchersTransaction, data).subscribe(
            data => {
                if(data.StatusCode == 200)
                {
                    this.toastr.success("Transaction Added Successfully!!!");
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

    backToVouchers() {
        this.router.navigate(['../vouchers']);
    }
    onFormSubmit(value) {
        debugger;

    }
}
