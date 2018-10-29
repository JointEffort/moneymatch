import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FactuurOverzichtComponent} from './factuur-overzicht/factuur-overzicht.component';


const inkoopRoutes: Routes = [
    {path: 'inkoop/overzicht', component: FactuurOverzichtComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            inkoopRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class InkoopRoutingModule {
}
