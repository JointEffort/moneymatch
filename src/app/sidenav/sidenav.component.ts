import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from './sidenav.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  private closed : boolean = false;
  private sidenavSubscription : Subscription;

  constructor(private sidenavService : SidenavService) {
    this.sidenavSubscription = this.sidenavService.opened.subscribe( isOpen => this.closed = !isOpen);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sidenavSubscription.unsubscribe();
  }

  toggle() {
    this.sidenavService.toggle();
  }
}
