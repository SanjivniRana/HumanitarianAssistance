import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService, Company } from '../accounts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DxDataGridComponent,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxFormComponent,
    DxPopupModule,
     DxTemplateModule,
     DxFileUploaderModule
   } from 'devextreme-angular';
@Component({
    selector: 'app-document',
    templateUrl: './document.component.html'
  })
  export class DocumentComponent implements OnInit { 
    dataSource: Company[];
    popupVisible = false;

    constructor(private accountservice:AccountsService, private router: Router){
        this.dataSource = this.accountservice.getCompanies();
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
        this.router.navigate(['/accounts/vouchers']);
    }
  }
