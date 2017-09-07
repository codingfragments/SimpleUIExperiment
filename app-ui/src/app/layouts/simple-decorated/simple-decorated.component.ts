import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {NavConfig, NavEntry} from '../../shared/api/routing-config';

@Component({
  selector: 'app-dashboard-simple',
  templateUrl: './simple-decorated.component.html',
  styleUrls: ['./simple-decorated.component.scss']
})
export class SimpleDecoratedComponent implements OnInit, OnChanges {



  public showTopnav = false;
  public topNavItems: NavEntry[] = [];
  public showSidenav: boolean;
  public sideNavItems: NavEntry[] = [];

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};


  constructor (private route: ActivatedRoute,
    private router: Router) {


}
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }





  ngOnInit (): void{
    this.router.events.filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.processActivatedRoute(this.route);
      });
    this.processActivatedRoute(this.route);

  }

  private processActivatedRoute(route: ActivatedRoute) {
    route.data.subscribe((data: any) => {
      if (data.topNav && data.topNav instanceof NavConfig) {
        const cfg: NavConfig = data.topNav;
        this.showTopnav = cfg.showNav;
        this.topNavItems = cfg.entries;

      }else this.showTopnav = false;
    });

    while (route.firstChild) route = route.firstChild;
    route.data.subscribe((data: any) => {
      if (data.sideNav && data.sideNav instanceof NavConfig) {
        const cfg: NavConfig = data.sideNav;
        this.showSidenav = cfg.showNav;
        this.sideNavItems = cfg.entries;

      } else this.showSidenav = false;
    });

  }


  ngOnChanges(changes: SimpleChanges): void {

  }
}


