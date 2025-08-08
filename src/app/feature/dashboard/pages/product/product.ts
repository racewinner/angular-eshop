import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../core/services/product.service';
import { 
  SingleProduct,
  ProductsResponse 
} from '../../../../core/models/api.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product implements OnInit {
  products = signal<SingleProduct[]>([]);

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() : void {
    this.productService.getProducts().subscribe({
      next: (response: ProductsResponse) => {
        this.products.set(response.products);
        debugger
      },
      error: (error: any) => {
        alert(error);
      }
    })
  }

}
