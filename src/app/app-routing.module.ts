import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AuthGuard } from './Auth/Authentication';

const appRoutes: Routes = [

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
]   


@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{useHash : true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
