import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from './sidenav.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.css'],
})
export class SidenavWrapperComponent implements OnInit, OnDestroy {

  closed: boolean = true;
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
