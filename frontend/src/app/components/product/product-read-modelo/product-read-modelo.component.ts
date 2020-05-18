import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadModeloDataSource, ProductReadModeloItem } from './product-read-modelo-datasource';

@Component({
  selector: 'app-product-read-modelo',
  templateUrl: './product-read-modelo.component.html',
  styleUrls: ['./product-read-modelo.component.css']
})
export class ProductReadModeloComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator; /* Filho da minha tela. Esse decoration funciona da seguinte forma, o angular vai percorre toda a tela/html procurando o componente MatPaginator quando encontrar vai atribuir a variável paginator*/
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductReadModeloItem>;
  dataSource: ProductReadModeloDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProductReadModeloDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
