import { HearderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // A classe BehaviorSubject estende um Subject, logo ele ficará observando caso ocorra alguma mudança nos valores internos, para mundar então o header
  private _headerData = new BehaviorSubject<HearderData> ({
    title: 'Início',
    icon: 'home',
    routeUrl: ''

  })

  constructor() { }

  get headerData(): HearderData {
    return this._headerData.value
  }

  set headerData(headerData: HearderData) {
    this._headerData.next(headerData)
  }
}
