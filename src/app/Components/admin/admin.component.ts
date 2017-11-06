import { Component, OnInit } from '@angular/core';
import { NgxRolesService } from 'ngx-permissions';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private permisstionService:NgxPermissionsService,private rolePermissions:NgxRolesService) { }

  ngOnInit() {

    
    
    const permissions = ['USER','ADMIN']
    this.permisstionService.loadPermissions(permissions) ;  
  }

}
