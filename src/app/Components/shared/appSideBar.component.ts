import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd , NavigationStart } from '@angular/router';
import { commonService  } from '../../Services/common.service';
import { SelectItem } from 'primeng/primeng';
import { ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';
import { AuthenticationService } from '../../Services/Authentication.Service';
import { NgxRolesService } from 'ngx-permissions';
import { NgxPermissionsService } from 'ngx-permissions';
import { AppSettingsService } from '../../Services/App-settings.Service';
import { GLOBAL } from '../../shared/global';

@Component({
    selector: "app-sidebar",
    templateUrl: './appSidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppSidebarComponent {
    Patients: Array<SelectItem>;  
    isMaster : boolean = false;
    isAdmin : boolean = false;
    
    constructor(
        private router: Router,
        private commonService : commonService,
        private changeDetector: ChangeDetectorRef,
        private authService : AuthenticationService,
        private ngxPermissionService:NgxPermissionsService,
        private appSettigs: AppSettingsService,
        private ngxroleservice : NgxRolesService
    ) {
        
    }
    PermissionsArr:any;
    permissionwithRole:any;
    RolesAndPermissionsList:any;
    
    getRolesAndPermissionsByUserId(UserId)
    {        
      this.authService.getRolesAndPermissionsByUserId(this.appSettigs.getBaseUrl() + GLOBAL.API_UserRoles_GetUserRolesByUserId,UserId).subscribe(
        data=>{                 
          this.PermissionsArr = [];
          this.permissionwithRole={};
          for(var i=0; i<data.data.RoleList.length;i++)
          {                    
            let rolename= data.data.RoleList[i].RoleName;
            this.RolesAndPermissionsList = [];
            this.RolesAndPermissionsList = data.data.RoleList[i].PermissionsList;
            for(var j=0;j<data.data.RoleList[i].PermissionsList.length;j++){
              this.PermissionsArr.push(data.data.RoleList[i].PermissionsList[j].Name);
            }
             this.permissionwithRole[""+rolename+""]= this.PermissionsArr;
             this.PermissionsArr=[];
         
          }
          var permissionStr =  this.PermissionsArr.join(',');

          this.ngxroleservice.addRoles(this.permissionwithRole);
          console.log(this.permissionwithRole);
          localStorage.setItem('UserPermissions',this.permissionwithRole);
      });
      
    }
    ngOnInit() {

        //var rolesArr = localStorage.getItem('UserRoles').split(',');
        var userId = localStorage.getItem('UserId');
        this.getRolesAndPermissionsByUserId(userId);

        
        
    }

    // goToInventory() {
    //     this.router.navigate(['/inventory']);
    // }

    // goToPatient() {
    //     this.router.navigate(['patientListing']);
    // }

    // goToPatientDetail(PatientID){
    //     this.router.navigate(['/patient', PatientID]);
    // }

    getPatientDetails(){
        // this.commonService
        // .GetPatients()
        // .subscribe(data => {   
        //     this.Patients = data;
        //     if (!this.changeDetector['destroyed']) {
        //         this.changeDetector.detectChanges();
        //     }
        // }, error =>{

        // })
    }

    getUserType(){
      
    }
}