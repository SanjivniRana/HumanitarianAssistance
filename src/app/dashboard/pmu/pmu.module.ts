import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./projects/projects.component";
import { ImplementationComponent } from "./implementation/implementation.component";
import { MonitoringComponent } from "./monitoring/monitoring.component";
import { PmuRoutingModule } from "./pmu-routing.module";
import { PmuComponent } from "./pmu.component";
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule } from "devextreme-angular";
import { PmuService } from "./pmu.service";

@NgModule({
    imports:[
        PmuRoutingModule,    
        DxDataGridModule,
        DxSelectBoxModule,
        DxCheckBoxModule,
        DxNumberBoxModule,
        DxButtonModule,
        DxFormModule,        
        DxPopupModule, 
        DxTemplateModule
    ],
    declarations:[
        ProjectsComponent,
        ImplementationComponent,
        MonitoringComponent,
        PmuComponent
    ],
    providers:[PmuService]
})

export class PMUModule { }