// import { Routes,RouterModule } from '@angular/router'
// import { ModuleWithProviders } from '@angular/core';
// import { AppComponent } from './app.component';
// import { NgxPermissionsGuard } from 'ngx-permissions';

// const appRoutes :Routes= [
//     { path: '#', component: AppComponent, pathMatch: 'full' },
    
//     {
//         path:'admin',
//         // canActivate: [NgxPermissionsGuard],
//         // data: {
//         //     permissions:{
//         //         only : ['Admin','SuperAdmin'],
//         //         except : ['Guest']
//         //     }
//         // },
//         loadChildren:'./Components/admin/admin.module#AdminModule'

//     },
//     {
//         path:'accounts',        
//         loadChildren:'./Components/accounts/accounts.module#AccountsModule'

//     }
// ]

// export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);