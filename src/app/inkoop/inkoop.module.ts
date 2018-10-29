import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactuurOverzichtComponent } from './factuur-overzicht/factuur-overzicht.component';
import {InkoopRoutingModule} from './inkoop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InkoopRoutingModule
  ],
  declarations: [FactuurOverzichtComponent]
})
export class InkoopModule { }
