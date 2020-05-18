import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [{
  path: "", /* Nome da rota */
  component: HomeComponent
}, {
  path: "products",
  component: ProductCrudComponent
}, {
  path: "products/create",
  component: ProductCreateComponent

}, {
  path: "products/update/:id",
  component: ProductUpdateComponent
}, {
  path: "products/delete/:id",
  component: ProductDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
