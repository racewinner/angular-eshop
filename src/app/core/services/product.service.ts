
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError }from 'rxjs/operators';
import {
  SingleProduct,
  ProductsResponse
} from '../models/api.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsResponse> {
    debugger
    return this.http.get<ProductsResponse>(`${this.API_URL}/api/product/get_products`).pipe(
      catchError((error: any) => {
        return of({
          products: []
        });
      })
    )
  }
}