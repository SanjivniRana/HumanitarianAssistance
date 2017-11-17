import { CodeComponent } from "./code.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CodeRoutingModule } from "./code.routing";
import { JournalCodeComponent } from "./journal-code/journal-code.component";


@NgModule({
    imports: [
        CommonModule,
        CodeRoutingModule,
        FormsModule,
    ],
    declarations: [
        CodeComponent,
        JournalCodeComponent
    ]
})
export class CodeModule { }