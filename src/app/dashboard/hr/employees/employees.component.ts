import { Component, OnInit } from '@angular/core';
import { HrService } from '../hr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  dataSource: any;
  
  constructor(private hrService: HrService, private router: Router) {
    this.EmployeeList();
   }

  ngOnInit() {
  }

  EmployeeList() {
    this.dataSource = this.hrService.getEmployeeLists();
  }

}
