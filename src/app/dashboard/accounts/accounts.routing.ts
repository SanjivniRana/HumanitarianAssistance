import { Routes, RouterModule } from '@angular/router'
import { AccountsComponent } from './accounts.component';
import { UserComponent } from '../admin/user.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { JournalComponent } from './journal/journal.component';
import { DocumentComponent } from './document/document.component';
import { LedgerComponent } from './ledger/ledger.component';
import { TrailBalanceComponent } from './trialBalance/trialBalance.component';
import { AdvanceDeductionComponent } from './advanceDeduction/advanceDeduction.component';
import { FinancialReportComponent } from './financial-report/financial-report.component';




const Account_Router: Routes =
    [{
        path: '', component: AccountsComponent,
        children: [
            // { path: '', redirectTo: 'vouchers', pathMatch: 'full' },
            { path: 'vouchers', component: VouchersComponent },
            { path: 'journal', component: JournalComponent },
            { path :'document',component:DocumentComponent},
            { 
                path: 'ledger', 
                component: LedgerComponent
            },
            {        
                path: 'trialbalance', 
                component: TrailBalanceComponent        
            },
            {        
                path: 'advanceDeduction', 
                component: AdvanceDeductionComponent        
            },
            {        
                path: 'financialreport', 
                component: FinancialReportComponent        
            }
        ]
    }];

export const accountRoute = RouterModule.forChild(Account_Router);
