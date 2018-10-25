import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavWrapperComponent } from './sidenav/sidenav-wrapper.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule,
        DashboardModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, SidenavComponent, SidenavWrapperComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
