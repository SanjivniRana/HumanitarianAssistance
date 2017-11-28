//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CommonModule } from '@angular/common';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccountsComponent } from './accounts.component';
import { AdminComponent } from '../admin/admin.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AccountsService } from './accounts.service';
import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxFormModule, DxButtonModule, DxNumberBoxModule, DxPopupModule, DxTemplateModule, DxFileUploaderModule, DxTabsModule, DxTreeListModule, DxPivotGridModule, DxLookupModule } from 'devextreme-angular';
import { JournalComponent } from './journal/journal.component';
import { DocumentComponent } from './document/document.component';
import { TrailBalanceComponent } from './trialBalance/trialBalance.component';
import { LedgerComponent } from './ledger/ledger.component';
import { AdvanceDeductionComponent } from './advanceDeduction/advanceDeduction.component';
import { FinancialReportComponent } from './financial-report/financial-report.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { BudgetBalanceComponent } from './budget-balance/budget-balance.component';

@NgModule({
  declarations: [
    VouchersComponent,
    AccountsComponent,
    JournalComponent,
    DocumentComponent,
    TrailBalanceComponent,
    LedgerComponent,
    AdvanceDeductionComponent,
    FinancialReportComponent,
    BudgetBalanceComponent,

  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    DxFileUploaderModule,
    DxTreeListModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxTemplateModule,
    DxPivotGridModule,
    DxPopupModule,
    DxTabsModule,
    DxLookupModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
      rolesIsolate: true
    }),
    //BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({}),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#31c3aa',
      secondaryColour: '#000',
      tertiaryColour: '#a129'
    }),
  ],
  providers: [AccountsService],

})
export class AccountsModule { }
