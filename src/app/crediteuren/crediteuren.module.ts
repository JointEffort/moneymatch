import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverzichtComponent } from './overzicht/overzicht.component';
import {CrediteurenRoutingModule} from './crediteuren-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CrediteurenRoutingModule
  ],
  declarations: [OverzichtComponent]
})
export class CrediteurenModule { }
