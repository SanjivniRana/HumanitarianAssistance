import { Component, OnInit } from '@angular/core';
import {
  DxDataGridComponent,
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

import { CodeService, MainLevelAccount, AccountLevel } from '../code.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chart-of-accounts',
  templateUrl: './chart-of-accounts.component.html',
  styleUrls: ['./chart-of-accounts.component.css']
})

export class ChartOfAccountsComponent implements OnInit {

  popupVisibleEditChartOfAccount = false;
  formToggle: number;

  fMainLevelAccount = {
    'AccountCode': '12',
    'AccountName': '',
    'ShowInList': true,
    'DonorMISCode': '',
    'DepMethod': '',
    'Rate(%)': ''
  };

  fControlLevelAccount = {
    'AccountCode': '1',
    'AccountName': '',
    'ShowInList': true,
    'DonorMISCode': '',
    'DepMethod': '',
    'Rate(%)': ''
  };

  fSubLevelAccount = {
    'MainAccountLevel': '',
    'SelectMain': '',
    'AccountCode': '2',
    'AccountName': '',
    'ShowInList': true,
    'DonorMISCode': '',
    'DepMethod': '',
    'Rate(%)': ''
  };

  fInputLevelAccount = {
    'MainAccountLevel': '',
    'ControlAccountLevel': '',
    'SelectMain': '',
    'AccountCode': '2',
    'AccountName': '',
    'ShowInList': true,
    'DonorMISCode': '',
    'DepMethod': '',
    'Rate(%)': ''
  };

  ngOnInit() {
    this.formToggle = 1;
  }

  mainLevelAccount: MainLevelAccount[];

  mainLeveFormlData: MainLevelAccount[];

  accountLevelDropdown: AccountLevel[];

  constructor(private codeService: CodeService, private toastr: ToastrService) {
    this.mainLevelAccount = this.codeService.getMainLevelAccounts();

    //Use for FormData
    // this.mainLeveFormlData = this.codeService.getMainLevelAccounts();

    this.accountLevelDropdown = this.codeService.getaccountLevels();

  }

  //Dropdown inside Add Model
  accountLevelSelectedValue(event: any) {
    this.toastr.success(event.value.AccountLevelName);
    this.formToggle = event.value.ID;
  }

  // MainLevelAccount Data
  onAddMainLevelAccount(data: any) {

  }

  // ControlLevelAccount Data
  onAddControlLevelAccount(data: any) {

  }

  // SubLevelAccount Data
  onAddSubLevelAccount(data: any) {

  }

  // InputLevelAccount Data
  onAddInputLevelAccount(data: any) {

  }

  addChartOfAccount() {
    this.popupVisibleEditChartOfAccount = true;
  }

  cancelChartOfAccount() {
    this.popupVisibleEditChartOfAccount = false;
  }
}

