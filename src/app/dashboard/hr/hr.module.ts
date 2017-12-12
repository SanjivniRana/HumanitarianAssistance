import { NgModule } from '@angular/core';
import { HrComponent } from './hr.component';
import { EmployeesComponent } from './employees/employees.component';
import { HrRoutingModule } from './hr-routing.module';
import { ProspectiveEmployeesComponent } from './prospective-employees/prospective-employees.component';
import { AdvancesComponent } from './advances/advances.component';
import { MonthlyLeavesRegisterComponent } from './monthly-leaves-register/monthly-leaves-register.component';
import { MonthlyPayrollSheetComponent } from './monthly-payroll-sheet/monthly-payroll-sheet.component';
import { PayrollMonthlyHoursComponent } from './payroll-monthly-hours/payroll-monthly-hours.component';
import { HrService } from './hr.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxPopupModule, DxLookupModule, DxTemplateModule, DxDateBoxModule } from 'devextreme-angular';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { CodeService } from '../code/code.service';

@NgModule({
    declarations: [
        HrComponent,
        EmployeesComponent,
        ProspectiveEmployeesComponent,
        AdvancesComponent,
        MonthlyLeavesRegisterComponent,
        MonthlyPayrollSheetComponent,
        PayrollMonthlyHoursComponent,
        AddEmployeesComponent
    ],
    imports: [
        HrRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxDataGridModule,
        DxSelectBoxModule,
        DxCheckBoxModule,
        DxNumberBoxModule,
        DxButtonModule,
        DxFormModule,
        DxPopupModule,
        DxDateBoxModule,
        DxLookupModule,
        DxTemplateModule,
        NgxPermissionsModule.forChild({
            permissionsIsolate: true,
            rolesIsolate: true
        }),

    ],
    providers: [
        HrService,
        CodeService
    ],

})
export class HrModule { }