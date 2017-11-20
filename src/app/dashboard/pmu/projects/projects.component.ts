import { Component, OnInit } from '@angular/core';
import { PmuService } from '../pmu.service';
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

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pmuProjects : any[];  
  constructor(private pmuservice: PmuService) {
    this.pmuProjects = this.pmuservice.getPMUProjects();
    }

  ngOnInit() {
  }

}
