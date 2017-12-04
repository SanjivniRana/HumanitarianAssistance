import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PmuComponent } from "./pmu.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ImplementationComponent } from "./implementation/implementation.component";
import { MonitoringComponent } from "./monitoring/monitoring.component";
import { AddNewComponent } from "./projects/add-new/add-new.component";
import { BeneficiariesComponent } from "./projects/beneficiaries/beneficiaries.component";
import { DocumentsComponent } from "./projects/documents/documents.component";
import { ProjectActivitiesComponent } from "./projects/project-activities/project-activities.component";
import { QuestionsComponent } from "./projects/questions/questions.component";
import { EditComponent } from "./projects/edit/edit.component";


const pmurouter: Routes =
    [{
        path: '', component: PmuComponent,
        children:
            [
                { path: 'projects', component: ProjectsComponent },
                { path: 'implementation', component: ImplementationComponent },
                { path: 'monitoring', component: MonitoringComponent },
                { path: 'add-new', component: AddNewComponent },
                { path: 'beneficiaries', component: BeneficiariesComponent },
                { path: 'documents', component: DocumentsComponent },
                { path: 'project-activities', component: ProjectActivitiesComponent },
                { path: 'questions', component: QuestionsComponent },
                { path: 'edit', component: EditComponent }
            ]
    }];

@NgModule({
    imports: [RouterModule.forChild(pmurouter)],
    exports: [RouterModule]
})
export class PmuRoutingModule { }