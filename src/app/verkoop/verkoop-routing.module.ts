import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FactuurOverzichtComponent} from './factuur-overzicht/factuur-overzicht.component';


const verkoopRoutes: Routes = [
    {path: 'verkoop/overzicht', component: FactuurOverzichtComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            verkoopRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class VerkoopRoutingModule {
}
