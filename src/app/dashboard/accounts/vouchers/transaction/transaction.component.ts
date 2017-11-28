import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule, DxFileUploaderModule } from 'devextreme-angular';
import { FormBuilder } from '@angular/forms';
import { AccountsService, Company, Document } from '../../accounts.service';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html'
  })
  export class TransactionComponent implements OnInit { 
    dataSource: Document[];
    popupVisible = false;
    addNewDocument : Document;

    constructor(private accountservice:AccountsService, private router: Router, private fb:FormBuilder){
        this.dataSource = this.accountservice.getVouchersDocumentList();
        this.addNewDocument = this.accountservice.getAddDoucmentModel();        
    }
    ngOnInit() {
        
    }

    addDocument()
    {
        this.popupVisible = true;
    }

    cancelDeleteVoucher()
    {
        this.popupVisible = false;        
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
