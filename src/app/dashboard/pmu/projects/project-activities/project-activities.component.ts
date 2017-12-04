import { Component } from '@angular/core';
import { Activity, ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-activities',
  templateUrl: './project-activities.component.html',
  styleUrls: ['./project-activities.component.css']
})
export class ProjectActivitiesComponent {
  
  activitiescodedata: any;
  popupAddActivitiesVisible: boolean;

  activity: Activity[];
  dataSource: any;
  // data: any;
  // question: string[];
  // showFilterRow: boolean;
  tab1: any;

  constructor(private projectsService: ProjectsService) { 
    //TODO: Edit popup dropdown
    this.activity = this.projectsService.getActivities();
    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.projectsService.getActivities()
      }
  }
} 
    budgettypes = [
      { BudgetTypeId: 1, BudgetTypeName: 'Demo'},
      { BudgetTypeId: 2, BudgetTypeName: 'Demo'}
    ];

    resourcetypes = [
      { ResourceTypeId: 1, ResourceTypeName: 'E0001-Wasim Khan'},
      { ResourceTypeId: 2, ResourceTypeName: 'E0002-Salman Khan'},
      { ResourceTypeId: 3, ResourceTypeName: 'E0003-Amir Pathan'},
      { ResourceTypeId: 4, ResourceTypeName: 'E0004-Rahul Khan'},
      { ResourceTypeId: 4, ResourceTypeName: 'E0005-Sam Ansari'}
    ];

    activitylocationtypes = [
      { ActivityLocationTypeId: 1, ActivityLocationTypeName: 'TES-TestOffice'},
    ];

    // tasks = [
    //   { tasktype: "Single Task", tasktypevalue: "SingleTask" },
    //   { tasktype: "Recurring Task", tasktypevalue: "RecurringTask" }
    // ];

    // recurringtasks = [
    //   { recurringTaskType: "Daily", recurringTaskTypeValue: "Daily" },
    //   { recurringTaskType: "Weekly", recurringTaskTypeValue: "Weekly" },
    //   { recurringTaskType: "Monthly", recurringTaskTypeValue: "Monthly" },
    //   { recurringTaskType: "Yearly", recurringTaskTypeValue: "Yearly" }
    // ];

    ShowPopup()
    {
        this.activitiescodedata = this.projectsService.getJournalCodeData();
        this.popupAddActivitiesVisible = true;
    }
  
    HidePopup()
    {
        this.popupAddActivitiesVisible = false;
    }
}
