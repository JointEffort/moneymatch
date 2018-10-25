import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SidenavComponent} from './sidenav.component';
import {SidenavService} from './sidenav.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.css']
})
export class SidenavWrapperComponent implements OnInit, OnDestroy {

  private closed: boolean = false;
  private sidenavSubscription: Subscription;

  constructor(private sidenavService: SidenavService) {
    this.sidenavSubscription = sidenavService.opened.subscribe(isOpen => this.closed = !isOpen);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sidenavSubscription.unsubscribe();
  }

  closeSidebar() {
    this.sidenavService.close();
  }
}
