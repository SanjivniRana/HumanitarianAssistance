import { NotFoundComponent } from "./not-found.component";
import { NgModule } from "@angular/core";
import { NotFoundRoutingModule } from "./not-found-routing.module";


@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        NotFoundRoutingModule,
    ]

})
export class NotFoundModule { }
