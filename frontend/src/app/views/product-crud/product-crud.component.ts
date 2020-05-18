import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { } /* Vai injetar uma dependência a rota */

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }

}
