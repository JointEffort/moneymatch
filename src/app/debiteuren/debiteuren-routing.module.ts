import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverzichtComponent} from './overzicht/overzicht.component';


const debiteurenRoutes: Routes = [
    {path: 'debiteuren/overzicht', component: OverzichtComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            debiteurenRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class DebiteurenRoutingModule {
}
