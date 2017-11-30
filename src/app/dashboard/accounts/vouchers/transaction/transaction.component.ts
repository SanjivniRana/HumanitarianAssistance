import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule, DxFileUploaderModule } from 'devextreme-angular';
import { FormBuilder } from '@angular/forms';
import { AccountsService, VoucherTransaction } from '../../accounts.service';
import { VouchersComponent } from '../vouchers.component';
import { commonService } from '../../../../Services/common.service';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    providers: [VouchersComponent]
  })
  export class TransactionComponent implements OnInit { 
    dataSource: VoucherTransaction[];
    voucherNumber: any;

    constructor(private accountservice:AccountsService, private router: Router, private fb:FormBuilder , private voucherComponent: VouchersComponent, private commonservice:commonService){
        this.dataSource = this.accountservice.getVoucherTransactionModel();
        console.log("sdasd"+this.commonservice.voucherNumber);
    }
    ngOnInit() { 
    }
    backToVouchers()
    {        
        this.router.navigate(['../vouchers']);
    }    
    onFormSubmit(value)
    {
        debugger;
    }
  }
