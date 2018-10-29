import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';


const dashboardRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            dashboardRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class DashboardRoutingModule {
}
