import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverzichtComponent } from './overzicht/overzicht.component';
import {DebiteurenRoutingModule} from './debiteuren-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DebiteurenRoutingModule
  ],
  declarations: [OverzichtComponent]
})
export class DebiteurenModule { }
