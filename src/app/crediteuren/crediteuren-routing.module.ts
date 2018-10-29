import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverzichtComponent} from './overzicht/overzicht.component';


const crediteurenRoutes: Routes = [
    {path: 'crediteuren/overzicht', component: OverzichtComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            crediteurenRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class CrediteurenRoutingModule {
}
