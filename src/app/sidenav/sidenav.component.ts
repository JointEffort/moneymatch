import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from './sidenav.service';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
      trigger('divState', [
          state('open', style({'width' : '200px', 'padding' : '2em 1em'})),
          state('closed', style({'width' : '0', 'padding' : '0'})),
          transition('closed => open', animate('250ms ease-out')),
          transition('open => closed', animate('300ms ease-out')),
      ])
  ]
})
export class SidenavComponent implements OnInit, OnDestroy {

  state = 'closed';
  closed : boolean = true;
  private sidenavSubscription : Subscription;

  constructor(private sidenavService : SidenavService) {
    this.sidenavSubscription = this.sidenavService.opened.subscribe( isOpen => {
      this.closed = !isOpen;
      this.state = isOpen ? 'open' : 'closed';
    });
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
