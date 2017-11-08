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
export interface Car {
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
  selectedValue:any;
  userForm: FormGroup;
  userRoles: FormGroup;
  modalRef: BsModalRef;
  modalRefPermission: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  //User DataTabale
  cars: Car[];
  sortF: any;

  // Roles Multiselect 
  officeId: SelectItem[];
  selectedCities1: any[];

  status: SelectItem[];
   
  department: SelectItem[];

  roles: SelectItem[];

  //UserId For AddRoles
  UserId:any;
  addRoles: any[];

  constructor(private fb: FormBuilder,private setting : AppSettingsService , private modalService: BsModalService, private userService: UserService) { 

    this.getOffices();    
    this.getUserList();
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

    this.status = [{label:'Active',value:1},
    {label:'InActive',value:0}];

    this.userRoles = this.fb.group({
      'Roles' : [null]
    });    
  }

  display: boolean = false;        
  ngOnInit() {
  }

  changeSort(event) {
      if (!event.order) {
        this.sortF = 'year';
      } else {
        this.sortF = event.field;
      }
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
    this.userService.GetUserList(this.setting.getBaseUrl() + GLOBAL.API_UserDetail_GetUserList).subscribe(
      data => {        
        this.cars = [];
        data.data.UserDetailsList.forEach(element => {
          this.cars.push({FirstName:element.FirstName,LastName:element.LastName,Email:element.Username,UserId:element.UserId,Id:element.Id, Office:element.OfficeName,Status:element.Status==1 ? "Active" : "InActive"});
        });
      }
    )
  }

  getUserRoles()
  {
    this.userService.getUserRoles(this.setting.getBaseUrl() + GLOBAL.API_UserRoles_GetRolesList).subscribe(
      data => {
        debugger;
        this.roles = [];
        data.data.RoleList.forEach(element => {          
          this.roles.push({label:element.RoleName,value:{id:element.Id, name: element.RoleName}});
        });
      }
    )
  }

  assignRolesToUser(Roles)
  {        
    debugger;
    this.addRoles = [];
    for(var i in Roles.Roles){
      this.addRoles.push(Roles.Roles[i].name);
    }
    
    this.userService.assignRolesToUser(this.setting.getBaseUrl() + GLOBAL.API_UserRoles_AssignRoleToUser, this.UserId , this.addRoles).subscribe(
      data => {
        
      }
    )
  }
  
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template,
  //     Object.assign({}, this.config, { class: 'gray' })
  //   );
  // }
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
    debugger; 
    this.UserId = colvalue.Id;  
    this.getUserRoles();   
    this.modalRefPermission = this.modalService.show(
      templatePermissions,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  } 
}
