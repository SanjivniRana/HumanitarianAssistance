import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxFormComponent,
  DxPopupModule, DxTemplateModule
 } from 'devextreme-angular';
  import { Order, AccountsService, Employee, Customer } from '../accounts.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {  
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  orders: Order[];
  saleAmountHeaderFilter: any;
  applyFilterTypes: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;
  statuses : string[];
  tasks:any;

  popupVisible = false;
  popupVisibleEditVoucher = false;
  popupVisibleDeleteVoucher = false;

  voucherNO:any;

  @ViewChild(DxFormComponent) form:DxFormComponent
  password = "";
  passwordOptions: any = {
      mode: "password",
      value: this.password
  };
  customer: Customer;
  countries: string[];
  maxDate: Date = new Date();
  cityPattern = "^[^0-9]+$";
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
  phoneRules: any = {
      X: /[02-9]/
  }
  passwordComparison = () => {
      return this.form.instance.option("formData").Password;
  };
  checkComparison() {
      return true;
  }
  colCountByScreen: Object;
  
  constructor(private accountservice:AccountsService) { 
    
    this.voucherNO = [{
    }];

    this.colCountByScreen = {
      md: 4,
      sm: 2
  };
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
    this.countries = this.accountservice.getCountries();
    this.customer = this.accountservice.getCustomer();
    console.log(this.customer);
    this.statuses = ["All", "California", "Nevada", "Colorado", "Deferred", "Completed"];

    this.orders = accountservice.getOrders();
    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
        key: "auto",
        name: "Immediately"
    }, {
        key: "onClick",
        name: "On Button Click"
    }];
  }

  screen(width) {
    return width < 720 ? "sm" : "md";
}

showInfo() {    
    this.popupVisible = true;
}

editVoucher() {    
    this.popupVisibleEditVoucher = true;
}

deleteVoucher() {    
    this.popupVisibleDeleteVoucher = true;
}
cancelDeleteVoucher()
{
    this.popupVisible = false;
    this.popupVisibleEditVoucher = false;
    this.popupVisibleDeleteVoucher = false;
}

documentAdd()
{
    
}

  selectStatus(data) {
    if (data.value == "All") {
        this.dataGrid.instance.clearFilter();
    } else {
        this.dataGrid.instance.filter(["State", "=", data.value]);
    }
}

  getOrderDay(rowData) {
    return (new Date(rowData.OrderDate)).getDay();
}

orderHeaderFilter(data) {
    data.dataSource.postProcess = (results) => {
        results.push({
            text: "Weekends",
            value: [
                [this.getOrderDay, "=", 0],
                "or", [this.getOrderDay, "=", 6]
            ]
        });

        return results;
    };
}

clearFilter() {
    this.dataGrid.instance.clearFilter();
}
  ngOnInit() {
  }

}
