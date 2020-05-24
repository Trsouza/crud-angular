import { MainNavData } from './main-nav1-data.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainNav1Service {

  // A classe BehaviorSubject estende um Subject, logo ele ficará observando caso ocorra alguma mudança nos valores internos, para mundar então o header
  private _mainNavData = new BehaviorSubject<MainNavData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''

  })

  constructor() { }

  get mainNavData(): MainNavData {
    return this._mainNavData.value
  }

  set mainNavData(mainNavData: MainNavData) {
    this._mainNavData.next(mainNavData)
  }
}
