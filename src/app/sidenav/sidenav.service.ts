import {Injectable, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sideNavOpen : boolean = false;

  @Output()
  opened : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.sideNavOpen);

  constructor() { }

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
