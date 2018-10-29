import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactuurOverzichtComponent } from './factuur-overzicht/factuur-overzicht.component';
import {VerkoopRoutingModule} from './verkoop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VerkoopRoutingModule
  ],
  declarations: [FactuurOverzichtComponent]
})
export class VerkoopModule { }
