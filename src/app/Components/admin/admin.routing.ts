import {Routes, RouterModule } from '@angular/router'
import { UserComponent } from './user.component';
import { AdminComponent } from './admin.component';

const Admin_Router : Routes = 
[
    { 
        path: '', 
        component: AdminComponent
    },
    { 
        path: 'user', 
        component: UserComponent
    }
    
  
];

export const adminRoute = RouterModule.forChild(Admin_Router);
