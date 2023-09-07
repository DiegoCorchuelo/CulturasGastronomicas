import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = "Products";
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    // promesa suscribirse al observable para recibir los datos
      .subscribe(products => this.products = products);
  }

}
