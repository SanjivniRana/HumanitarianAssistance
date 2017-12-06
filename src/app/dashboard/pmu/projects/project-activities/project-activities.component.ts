import { Component } from '@angular/core';
import { Activity, ProjectsService, ActivitiesData } from '../projects.service';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap';
import { AppSettingsService } from '../../../../Services/App-settings.Service';

@Component({
  selector: 'app-project-activities',
  templateUrl: './project-activities.component.html',
  styleUrls: ['./project-activities.component.css']
})
export class ProjectActivitiesComponent {
  
  activitiesdata: ActivitiesData;
  popupAddActivitiesVisible = false;

  activity: Activity[];
  dataSource: any;
  tab1: any;
  // budgetType: BudgetTypes[];
  // resourceType: resourceType[];
  // locationType: locationType[];

  constructor(private projectsService: ProjectsService,private fb: FormBuilder,private modalService: BsModalService,private setting : AppSettingsService) { 

    // this.budgetType = this.projectsService.getBudgetType();
    // this.resourceType = this.projectsService.getResourceType();
    // this.locationType = this.projectsService.getLocationType();
    this.activitiesdata = this.projectsService.getActivitiesData();
    console.log(this.activitiesdata);
    this.activity = this.projectsService.getActivities();
    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.projectsService.getActivities()
      }
  }
} 
//#region "dropdown"
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

    tasks = [
      { tasktype: "Single Task", tasktypevalue: "SingleTask" },
      { tasktype: "Recurring Task", tasktypevalue: "RecurringTask" }
    ];

    recurringtasks = [
      { recurringTaskType: "Daily", recurringTaskTypeValue: "Daily" },
      { recurringTaskType: "Weekly", recurringTaskTypeValue: "Weekly" },
      { recurringTaskType: "Monthly", recurringTaskTypeValue: "Monthly" },
      { recurringTaskType: "Yearly", recurringTaskTypeValue: "Yearly" }
    ];
//#endregion "dropdown"

//#region "popup"
    ShowPopup()
    {
        this.activitiesdata = this.projectsService.getActivitiesData();
        this.popupAddActivitiesVisible = true;
    }
  
    HidePopup()
    {
        this.popupAddActivitiesVisible = false;
    }

    onFormSubmit(model)
    {
        this.AddActivities(model);
    }

    AddActivities(model)
    {
      var addactivities: ActivitiesData = {
        ActivityDesc : model.ActivityDesc,
        PlannedStartDate : model.PlannedStartDate,
        PlannedEndDate : model.PlannedEndDate,
        BudgetLine : model.BudgetLine,
        Resource : model.Resource,
        LocationOfActivity : model.LocationOfActivity,
        TaskType : model.TaskType
      };
    }
    //#endregion "popup"
}
