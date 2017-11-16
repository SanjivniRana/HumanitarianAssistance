//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CommonModule } from '@angular/common';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { accountRoute } from './accounts.routing';
import { AccountsComponent } from './accounts.component';
import { AdminComponent } from '../admin/admin.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AccountsService } from './accounts.service';
import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxFormModule, DxButtonModule, DxNumberBoxModule, DxPopupModule, DxTemplateModule, DxFileUploaderModule } from 'devextreme-angular';
import { JournalComponent } from './journal/journal.component';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [
    VouchersComponent,
    AccountsComponent,
    JournalComponent,
    DocumentComponent    
  ],
  imports: [
    CommonModule,   
    accountRoute,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxPopupModule,
    DxTemplateModule,
    DxFileUploaderModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true, 
      rolesIsolate: true}),
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
