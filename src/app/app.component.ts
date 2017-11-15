import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { NgxRolesService } from 'ngx-permissions';
import { CommonService } from './app.common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  commonService = new CommonService();
  
  constructor(private permisstionService:NgxPermissionsService,private roleService : NgxRolesService){

  }
  ngOnInit() {
    var token = localStorage.getItem('authenticationtoken');
    if (token && token != "") {
      this.commonService.menuVisibility = true;
    //  this.commonService.applyRoleOnMenu();
    
     this.roleService.addRoles(
       {
         'SUPERADMIN':['canRead','canAdd']     
       });
     }       
  }
  recheckToken(){
   var token = localStorage.getItem('authenticationtoken');
    if (token && token != "") {
      this.commonService.menuVisibility = true;
     // this.commonService.applyRoleOnMenu();
    } else {
      this.commonService.menuVisibility = false;      
    }
  }  

}
