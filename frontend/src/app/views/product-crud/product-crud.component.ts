import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MainNav1Service } from 'src/app/components/template/main-nav1/main-nav1.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private mainNavService: MainNav1Service) {
    mainNavService.mainNavData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  } /* Vai injetar uma dependência a rota */

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }

}
