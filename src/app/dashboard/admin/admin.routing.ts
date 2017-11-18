import { Routes, RouterModule } from '@angular/router'
import { UserComponent } from './user.component';
import { AdminComponent } from './admin.component';
import { AccountsComponent } from '../accounts/accounts.component';

const Admin_Router: Routes =
    [{
        path: '', component: UserComponent,
        children: [
            // { path: '', redirectTo: 'admin', pathMatch: 'full' },
            { path: 'admin', component: AdminComponent },
            { path: 'user', component: UserComponent }
        ]
    }];

export const adminRoute = RouterModule.forChild(Admin_Router);
