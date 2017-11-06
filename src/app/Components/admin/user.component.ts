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
export interface Car {
  vin;
  year;
  brand;
  color;
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
  roles: SelectItem[];
  selectedCities1: any[];

  status: SelectItem[];

  constructor(private fb: FormBuilder, private modalService: BsModalService, private userService: UserService) { 

    // AddUser Modal Popup

    this.userForm = this.fb.group({
      'FirstName' : [null,Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      'LastName' : [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      'Email' : [null, [Validators.required, Validators.email]],
      'Phone' : [null, Validators.required],
      'Password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'ConfirmPassword' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])], 
      'Roles' : [null, Validators.required],
      'Status' : [null]
    });

    this.roles = [
      {label:'SuperAdmin', value:{id:1, name: 'SuperAdmin'}},
      {label:'Admin', value:{id:2, name: 'Admin'}},
      {label:'Branch Manager', value:{id:3, name: 'Branch Manager'}},
      {label:'Department Head', value:{id:4, name: 'Department Head'}},
      {label:'User', value:{id:5, name: 'User'}}
    ];

    this.status = [{label:'Active',value:'Active'},
    {label:'InActive',value:'InActive'}];
  }

  display: boolean = false;        
  ngOnInit() {
    this.cars = [
      {vin:'dsa',
      year:'dsdasa',
      brand:'ddasdas',
      color:'dasd'},

      {vin:'dsaghfgh',
      year:'dsa',
      brand:'dfdsas',
      color:'dasd'},

      {vin:'dsa',
      year:'dsdfga',
      brand:'dajghjs',
      color:'dasd'},

      {vin:'dsfsa',
      year:'dsa',
      brand:'dadfgs',
      color:'dasd'},

      {vin:'dsa',
      year:'dsafsdds',
      brand:'das',
      color:'dasd'},

      {vin:'dsa',
      year:'dsafsdfsd',
      brand:'das',
      color:'dasd'},

      {vin:'dsa',
      year:'dsa',
      brand:'das',
      color:'dasd'},

      {vin:'dsa',
        year:'dsa',
        brand:'ddasddas',
        color:'dasd'},

        {vin:'dsdasdsada',
        year:'dsadas',
        brand:'daddasass',
        color:'dasd'},

        {vin:'dsa',
        year:'dsdasdaa',
        brand:'das',
        color:'dadsasd'}
  ];    

  // this.getUserList();
  }

  changeSort(event) {
      if (!event.order) {
        this.sortF = 'year';
      } else {
        this.sortF = event.field;
      }
  }

  // getUserList()
  // {
  //   debugger;
  //   this.userService.GetUserList(GLOBAL.API_UserDetail_GetUserList).subscribe(
  //     data => {

  //     }
  //   )
  // }
  
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

  userFormSubmit(formValues)
  {
    debugger;
    this.userService.AddUser(GLOBAL.API_UserDetail_AddUser, formValues).subscribe(
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
