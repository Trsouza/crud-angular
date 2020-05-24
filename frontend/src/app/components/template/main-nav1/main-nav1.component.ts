import { MainNav1Service } from './main-nav1.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav1',
  templateUrl: './main-nav1.component.html',
  styleUrls: ['./main-nav1.component.css']
})
export class MainNav1Component implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private mainNavService: MainNav1Service) { }

  ngOnInit(): void {
  }
  get title(): string {
    return this.mainNavService.mainNavData.title
  }
  get icon(): string {
    return this.mainNavService.mainNavData.icon
  }
  get routeUrl(): string {
    return this.mainNavService.mainNavData.routeUrl
  }

}
