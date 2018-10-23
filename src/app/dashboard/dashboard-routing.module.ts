import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';


const sharedRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            sharedRoutes,
            {enableTracing: false})
    ],
    exports: [
        RouterModule
    ],
})
export class DashboardRoutingModule {
}
