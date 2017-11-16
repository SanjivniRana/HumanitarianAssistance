import {Routes, RouterModule } from '@angular/router'
import { AccountsComponent } from './accounts.component';
import { UserComponent } from '../admin/user.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { JournalComponent } from './journal/journal.component';
import { LedgerComponent } from './ledger/ledger.component';



const Account_Router : Routes = 
[
    { 
        path: ' ', 
        component: AccountsComponent,
        // children : [{
        //     path : 'vouchers',
        //     component : VouchersComponent
        // }]
    },
    { 
        path: 'vouchers', 
        component: VouchersComponent        
    },
    { 
        path: 'journal', 
        component: JournalComponent        
    },
    { 
        path: 'ledger', 
        component: LedgerComponent        
    }
];

export const accountRoute = RouterModule.forChild(Account_Router);
