import { Routes, RouterModule } from "@angular/router";
import { CodeComponent } from "./code.component";
import { JournalCodeComponent } from "./journal-code/journal-code.component";
import { NgModule } from "@angular/core";
import { ChartOfAccountsComponent } from "./chart-of-accounts/chart-of-accounts.component";


const appRouter: Routes =
    [{
        path: '', component: CodeComponent,
        children:
            [
                { path: 'journal-code', component: JournalCodeComponent },
                { path: 'chart-of-accounts', component: ChartOfAccountsComponent },
            ]
    }];

@NgModule({
    imports: [RouterModule.forChild(appRouter)],
    exports: [RouterModule]
})
export class CodeRoutingModule { }

