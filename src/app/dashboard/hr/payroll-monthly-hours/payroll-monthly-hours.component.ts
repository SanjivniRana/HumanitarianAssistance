import { Component, OnInit } from '@angular/core';
import { HrService, OfficeType, PayrollMonthlyHours } from '../hr.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payroll-monthly-hours',
  templateUrl: './payroll-monthly-hours.component.html',
  styleUrls: ['./payroll-monthly-hours.component.css']
})
export class PayrollMonthlyHoursComponent implements OnInit {

  payrollMonthlyHours: PayrollMonthlyHours[];
  officeType: OfficeType[];
  dataSource: any;
  
  constructor(private hrService: HrService,private fb: FormBuilder) { 

    this.officeType = this.hrService.getOfficeType();
    this.payrollMonthlyHours = this.hrService.getPayrollMonthlyHours();
    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.hrService.getPayrollMonthlyHours()
      }
    }
  }
 
  ngOnInit() {
  }

}
