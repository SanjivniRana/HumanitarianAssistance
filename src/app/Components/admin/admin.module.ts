//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user.component'
import {adminRoute } from './admin.routing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import {DialogModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent
  ],
  imports: [
    adminRoute,
    DialogModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true, 
      rolesIsolate: true}),
      //BrowserAnimationsModule,
      
    TranslateModule.forChild({    })
  ],
  providers: [],
  
})
export class AdminModule { }
