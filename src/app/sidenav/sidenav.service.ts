import {Injectable, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sideNavOpen : boolean = false;

  @Output()
  opened : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.sideNavOpen);

  constructor(private router : Router) {
    router.events.subscribe( evt => {
      if (evt instanceof NavigationEnd) {
        this.close();
      }
    });

  }

  close() {
    this.sideNavOpen = false;
    this.emit();
  }

  open() {
    this.sideNavOpen = true;
      this.emit();
  }

  toggle() {
    this.sideNavOpen = !this.sideNavOpen;
      this.emit();
  }

  private emit() {
      this.opened.next(this.sideNavOpen);
  }
}
