import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { MainNav1Service } from 'src/app/components/template/main-nav1/main-nav1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mainNavService:MainNav1Service) {
    mainNavService.mainNavData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/'
    }
   }

  ngOnInit(): void {
  }

}
