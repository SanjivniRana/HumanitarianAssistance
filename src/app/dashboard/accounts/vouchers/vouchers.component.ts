import { Component, OnInit, ViewChild } from '@angular/core';
import {
    DxDataGridComponent,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxFormComponent,
    DxPopupModule, DxTemplateModule
} from 'devextreme-angular';
import { Order, AccountsService, Employee, Customer, Currency } from '../accounts.service';
import ArrayStore from 'devextreme/data/array_store';

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
    statuses: string[];
    tasks: any;

    currency: Currency[];

    popupVisible = false;
    popupVisibleEditVoucher = false;
    popupVisibleDeleteVoucher = false;

    voucherNO: any;

    @ViewChild(DxFormComponent) form: DxFormComponent
    password = "";
    passwordOptions: any = {
        mode: "password",
        value: this.password
    };
    customer: Customer;
    countries: string[];
    countries1: any[];
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
    simpleProducts: string[];
    data: any;
    constructor(private accountservice: AccountsService) {


        this.voucherNO = [{
        }];

        this.colCountByScreen = {
            md: 4,
            sm: 2
        };
        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
        this.countries = this.accountservice.getCountries();
        this.countries1 = this.accountservice.getCountries1();
        this.data = new ArrayStore({
            data: this.countries1,
            key: "ID"
        });
        debugger;
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


        //dropdown
        this.currency = this.accountservice.getCurrencies();
    }

    screen(width) {
        return width < 720 ? "sm" : "md";
    }

    showInfo() {
        this.popupVisible = true;
    }

    editVoucher(data: any) {
        this.popupVisibleEditVoucher = true;
        debugger;
        console.log(data);
    }

    deleteVoucher() {
        this.popupVisibleDeleteVoucher = true;
    }
    cancelDeleteVoucher() {
        this.popupVisible = false;
        this.popupVisibleEditVoucher = false;
        this.popupVisibleDeleteVoucher = false;
    }

    documentAdd() {

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


    

    // TODO: Edit , Delete  ---------------------------

    onContentReady(e) {
        e.component.columnOption("command:edit", {
            //    visibleIndex: -1,
            //    width: 80
        });
    }

    onCellPrepared(e) {
        if (e.rowType === "data" && e.column.command === "edit") {
            var isEditing = e.row.isEditing,
                cellElement = e.cellElement;

            if (isEditing) {
                let saveLink = cellElement.querySelector(".dx-link-save"),
                    cancelLink = cellElement.querySelector(".dx-link-cancel");

                saveLink.classList.add("dx-icon-save");
                cancelLink.classList.add("dx-icon-revert");

                saveLink.textContent = "";
                cancelLink.textContent = "";
            } else {
                let editLink = cellElement.querySelector(".dx-link-edit"),
                    deleteLink = cellElement.querySelector(".dx-link-delete");

                editLink.classList.add("dx-icon-edit");
                deleteLink.classList.add("dx-icon-trash");

                editLink.textContent = "";
                deleteLink.textContent = "";
            }
        }
    }
    // TODO: Edit , Delete  ---------------------------



    ngOnInit() {
    }

}
