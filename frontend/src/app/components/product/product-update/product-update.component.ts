import { Product } from './../products.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(
    private productservice: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id')
    this.productservice.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productservice.update(this.product).subscribe(() => {
      this.productservice.showMensage('Produto atualizado com sucesso')
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
