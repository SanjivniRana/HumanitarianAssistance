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
    
    var token = localStorage.getItem('authenticationtoken');
    if (token && token != "") {
      this.commonService.menuVisibility = true;
    //  this.commonService.applyRoleOnMenu();
    
    const prm = ['GUEST'];
    this.permisstionService.loadPermissions(prm);

    // this.roleService.addRoles(
    //   {
    //     'USER':['canRead'],
    //     'ADMIN' :['canRead','canAdd'],
    //     'SUPERADMIN' : ['canRead','canAdd','canDelete']
    
    //   });
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
