import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PmuComponent } from "./pmu.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ImplementationComponent } from "./implementation/implementation.component";
import { MonitoringComponent } from "./monitoring/monitoring.component";


const pmurouter: Routes = 
[{
    path:'',component: PmuComponent,
    children: 
        [
            { path:'projects', component: ProjectsComponent },
            { path:'implementation', component: ImplementationComponent },
            { path:'monitoring', component: MonitoringComponent }
        ]
}];

@NgModule({
    imports: [RouterModule.forChild(pmurouter)],
    exports: [RouterModule]
})
export class PmuRoutingModule { }