import { map, catchError } from 'rxjs/operators';
import { Product } from './products.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'  /* O root  significa que esse service possui apenas uma instância, o que significa se esse service tiver atributos os valores deles serão compartilhados com quem ele for injetado*/
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg,'',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] /* Está no css global*/
    })
  }

  create(product: Product): Observable<Product> { /* Utilizamos o Observable pois esse metodo demora uns segundos para ser processado */ 
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`   /* Pega a urlBase e concatenando com o id escolhido*/
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  } 
  
  errorHandler(e: any): Observable<any> { /*  Vai verificar se tem erro no post */
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }
}
