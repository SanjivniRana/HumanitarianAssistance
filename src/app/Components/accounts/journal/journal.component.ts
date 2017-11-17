import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxFormComponent,
  DxPopupModule, DxTemplateModule,
  DxTemplateHost 
 } from 'devextreme-angular';
  import { Order, AccountsService, Employee, Customer } from '../accounts.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html'
})
export class JournalComponent implements OnInit {  
  dataSource: any;
  showFilterRow: boolean;
  constructor(private accountservice:AccountsService) { 
    this.showFilterRow = true;
    this.dataSource = {
        store: {
            type: 'array',
            key: 'ID',
            data: this.accountservice.getEmployees()
        }
    }
  }
  completedValue(rowData) { 
    return rowData.Status == "Completed";
}
  ngOnInit() {
  }

}
