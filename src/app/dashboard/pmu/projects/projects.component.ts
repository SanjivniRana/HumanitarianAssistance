import { Component, OnInit } from '@angular/core';
import { PmuService, PMUProjectList, PMUProjectDetail } from '../pmu.service';
import { DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxFormComponent,
  DxPopupModule, DxTemplateModule
 } from 'devextreme-angular';
 import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pmuProjects : any[];  
  popupVisible = false;
  projectPmu: PMUProjectList[];
  pmuProjectDetails : PMUProjectDetail;
  data: any;
  constructor(private pmuservice: PmuService) {
    this.pmuProjects = this.pmuservice.getPMUProjects();
    this.projectPmu = this.pmuservice.getPMUProjectsList();
    this.data = new ArrayStore({
        data: this.projectPmu,
        key: "ID"
    });
    }

  ngOnInit() {
  }

  addProjectPMU()
  {
    this.popupVisible = true;
  }

  cancelDeleteVoucher() {
    this.popupVisible = false; 
}

selectedFinancialYear(value)
{
  debugger;
}

}
