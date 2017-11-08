import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { UserService } from './user.service';
import { MultiSelectModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/components/common/api';
import { GLOBAL } from '../../shared/global';
import { DropdownModule } from 'primeng/primeng';
import { AppSettingsService } from '../../Services/App-settings.Service';
import { AddUsers } from '../../Models/AddUser';
import { ToastrService } from 'ngx-toastr';
export interface UserDetails {
  FirstName;
  LastName;
  Email;
  Office;
  Status;
  UserId;
  Id;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
  
})

export class UserComponent implements OnInit {

  // AddUser Modal Popup
  loading=false;
  selectedValue:any;
  userForm: FormGroup;
  userRoles: FormGroup;
  AddPermissions: FormGroup;

  //Modal popup instances
  modalRef: BsModalRef;
  modalRefPermission: BsModalRef;
  modalPermission: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  //User DataTabale
  userDetails: UserDetails[];

  // Add User dropdowns
  officeId: SelectItem[];
  status: SelectItem[];
  department: SelectItem[];
  roles: SelectItem[];
  RolesUser: SelectItem[];
  Permissions : SelectItem[];

  //UserId For AddRoles
  UserId:any;
  addRoles: any[];

  constructor(private toastr: ToastrService,private fb: FormBuilder,private setting : AppSettingsService , private modalService: BsModalService, private userService: UserService) { 

    // AddUser Modal Popup
    
    this.userForm = this.fb.group({
      'FirstName' : [null,Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      'LastName' : [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      'Email' : [null, [Validators.required, Validators.email]],
      'Phone' : [null, Validators.required],
      'Password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'ConfirmPassword' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])], 
      'OfficeId' : [null, Validators.required],
      'Department' : [null, Validators.required],      
      'Status' : [null]
    });

    //Status Array
    this.status = [{label:'Active',value:1},
    {label:'InActive',value:0}];

    //Add Roles Form
    this.userRoles = this.fb.group({
      'Roles' : [null]
    });    

    //Add Permissions Form
    this.AddPermissions = this.fb.group({
      'Roles' : [null],
      'Permissions' : [null]
    }); 

    this.Permissions = [
      {label:'CanAdd', value:{id:1, name: 'CanAdd', code: 'NY'}},
      {label:'CanDelete', value:{id:2, name: 'CanDelete', code: 'RM'}},
      {label:'CanView', value:{id:3, name: 'CanView', code: 'LDN'}},
      {label:'CaRead', value:{id:4, name: 'CaRead', code: 'IST'}}      
    ];
  }

  display: boolean = false;        
  ngOnInit() {

    this.getOffices();    
    this.getUserList();
    this.getUserRoles();

  }

  getOffices()
  {
    this.userService.getOffices(this.setting.getBaseUrl() +GLOBAL.API_AllOffice_URL).subscribe(data=>{      
      this.officeId=[];
      data.data.OfficeDetailsList.forEach(element => {
        this.officeId.push({label:element.OfficeName,value:element.OfficeCode});
      });    
    });
  }

  getDepartment(officeCode)
  {
    this.userService.getDepartment(this.setting.getBaseUrl() + GLOBAL.API_AllDepartment_Url,officeCode).subscribe(data=>{      
      this.department=[];
      data.data.Departments.forEach(element => {
        this.department.push({label:element.DepartmentName,value:element.DepartmentId});
      });
    });
  }

  onChangeOffice(officeCode:any)
  {
    this.getDepartment(officeCode);
  }

  
  getUserList()
  {    
    this.loading=true;
    this.userService.GetUserList(this.setting.getBaseUrl() + GLOBAL.API_UserDetail_GetUserList).subscribe(
      data => {        
        this.userDetails = [];
        this.loading=false;
        data.data.UserDetailsList.forEach(element => {
          this.userDetails.push({FirstName:element.FirstName,LastName:element.LastName,Email:element.Username,UserId:element.UserId,Id:element.Id, Office:element.OfficeName,Status:element.Status==1 ? "Active" : "InActive"});
        });
      },
      error => {
        this.loading=false;
        this.toastr.error("There is Some error....");
        if (error.message == 500) {
          
        //  this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Oops, Something went wrong. Please try again.' });
        }
        else if (error.message == 0) {
          //this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Network error, Please try again later' });
        }
        else {
          //this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Some error occured, Please contact your admin' });
        }}
    )
  }

  getUserRoles()
  {
    this.userService.getUserRoles(this.setting.getBaseUrl() + GLOBAL.API_UserRoles_GetRolesList).subscribe(
      data => {
        this.roles = [];
        data.data.RoleList.forEach(element => {          
          this.roles.push({label:element.RoleName,value:{id:element.Id, name: element.RoleName}});      
        });
      }
    )
  }

  assignRolesToUser(Roles)
  {        
    this.addRoles = [];
    for(var i in Roles.Roles){
      this.addRoles.push(Roles.Roles[i].name);
    }
    
    this.userService.assignRolesToUser(this.setting.getBaseUrl() + GLOBAL.API_UserRoles_AssignRoleToUser, this.UserId , this.addRoles).subscribe(
      data => {
        
      }
    )
  }

  PermissionsInRoles(value)
  {
    debugger;
    var obj = {
      RoleId : value.Roles.id
    };
    this.userService.PermissionsInRoles(this.setting.getBaseUrl() + GLOBAL.API_Permissions_AddPermissionInRoles).subscribe(
      data => {
        
      }
    )
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  }

  userFormSubmit(model)
  {
    var obj: any = {};
    var addUser:AddUsers = {
      UserName : model.Email, 
      Email: model.Email, 
      Password : model.Password,
      FirstName : model.FirstName,
     LastName : model.LastName,
     UserType : localStorage.getItem("UserRoles"),
     OfficeCode : model.OfficeId,
     OfficeName: "",
     DepartmentName : "",
     DepartmentId : model.Department,
     Status : model.Status
    };
    this.userService.AddUser(this.setting.getBaseUrl() + GLOBAL.API_UserDetail_AddUser, addUser).subscribe(
      data => {
          if (data == true) //Success
          {
              //this.msg = "Data successfully added.";
              
              //this.LoadUsers();                            
          }
          else {
              //error  message

          }

          this.modalRef.hide();
        

      },
      error => {
          //error message
      }
  );
    this.modalRef.hide();
  }  

  openModalPermissions(templatePermissions: TemplateRef<any>,colvalue) { 
    this.UserId = colvalue.Id;     
    this.modalRefPermission = this.modalService.show(
      templatePermissions,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  } 

  openModalAddPermissions(AddPermissionsTemplate: TemplateRef<any>) { 
    //this.getPermissions();
    this.modalPermission = this.modalService.show(
      AddPermissionsTemplate,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  } 

  getPermissions()
  {    
    this.userService.getPermissions(this.setting.getBaseUrl() + GLOBAL.API_Permissions_GetAllPermissions).subscribe(
      data => {        
      }
    )
  }

}
