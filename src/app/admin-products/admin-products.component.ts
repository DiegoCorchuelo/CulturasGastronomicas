import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[] = [];
  selectedPhoto: string | null = null; // Holds the selected image URL

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }

  add(name: string, description: string | null, history: string | null, category: string | null, photo: string | null): void {
    name = name.trim();
    if (!name) { return; }
    this.productsService.addProduct({
      name,
      description,
      history,
      category,
      photo
    } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }

  // Handle the photo change event and update the selectedPhoto property
  handlePhotoChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedPhoto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productsService.deleteProduct(product.id).subscribe();
  }

}
