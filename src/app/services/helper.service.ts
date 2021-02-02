import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public navType = 'nav-trasparent';
  public hasFooter = true;
  public hasNav = true;
  public isMobile: boolean;
  public loading = new BehaviorSubject(false);
  public navOpen: boolean;
  public content = 'nav';  

  public userToLogin: any;
  public drawer: MatDrawer;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public http: HttpClient
  ) {
    this.breakpointObserver.observe(['(min-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  public scroll() {
    parent.scroll(0, 0);
  }

  get isLoading() {
      return this.loading.getValue();
  }
}
