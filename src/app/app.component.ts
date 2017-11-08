import { Component } from '@angular/core';
import { CommonService } from "../../src/app/app.common";
import { NgxPermissionsService } from 'ngx-permissions';
import { NgxRolesService } from 'ngx-permissions';
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
    debugger;
    var token = localStorage.getItem('authenticationtoken');
    if (token && token != "") {
      this.commonService.menuVisibility = true;
    //  this.commonService.applyRoleOnMenu();
    
     this.roleService.addRoles(
       {
         'SUPERADMIN':['canRead','canAdd']
     
       });
    //debugger;
 


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
