import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found.component";



const appRoutes: Routes =
    [
        { path: '', component: NotFoundComponent }
    ]
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule { }
