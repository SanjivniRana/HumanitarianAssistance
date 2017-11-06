//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user.component'
import {adminRoute } from './admin.routing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import {DialogModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/components/common/shared';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { UserService } from './user.service';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    adminRoute,
    DialogModule,
    MultiSelectModule,
    DropdownModule,
    DataTableModule,SharedModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true, 
      rolesIsolate: true}),
      //BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
    TranslateModule.forChild({    })
  ],
  providers: [UserService],
  
})
export class AdminModule { }
