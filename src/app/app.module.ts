import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidenavComponent} from './sidenav/sidenav.component';
import {SidenavWrapperComponent} from './sidenav/sidenav-wrapper.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InkoopModule} from './inkoop/inkoop.module';
import {VerkoopModule} from './verkoop/verkoop.module';
import {CrediteurenModule} from './crediteuren/crediteuren.module';
import {DebiteurenModule} from './debiteuren/debiteuren.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        DashboardModule,
        InkoopModule,
        VerkoopModule,
        CrediteurenModule,
        DebiteurenModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, SidenavComponent, SidenavWrapperComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
