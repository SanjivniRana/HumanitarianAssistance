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
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
  
})

export class UserComponent implements OnInit {

  // AddUser Modal Popup
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

    this.roles = [
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
    
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
    debugger;
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
    debugger;
    this.getDepartment(officeCode);
  }

  
  getUserList()
  {
    debugger;
    this.userService.GetUserList(this.setting.getBaseUrl() + GLOBAL.API_UserDetail_GetUserList).subscribe(
      data => {
        debugger;
        this.cars = [];
        data.data.UserDetailsList.forEach(element => {
          this.cars.push({FirstName:element.FirstName,LastName:element.LastName,Email:element.Email,Office:element.OfficeName,Status:element.Status});
        });
      }
    )
  }
  
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template,
  //     Object.assign({}, this.config, { class: 'gray' })
  //   );
  // }
  openModalWithClass(template: TemplateRef<any>) {
    debugger;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  }

  userFormSubmit(model)
  {
    debugger;
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

  openModalPermissions(templatePermissions: TemplateRef<any>) { 
    debugger;       
    this.modalRefPermission = this.modalService.show(
      templatePermissions,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  } 
}
