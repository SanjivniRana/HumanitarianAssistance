import { Routes,RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const appRoutes :Routes= [
    { path: '#', component: AppComponent, pathMatch: 'full' },
    
    {
        path:'admin',
        loadChildren:'./Components/admin/admin.module#AdminModule'

    }

]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);