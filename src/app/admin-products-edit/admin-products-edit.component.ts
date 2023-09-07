import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductsService } from '../product.service';


@Component({
  selector: 'app-admin-products-edit',
  templateUrl: './admin-products-edit.component.html',
  styleUrls: ['./admin-products-edit.component.css']
})
export class AdminProductsEditComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
        // convertir cadena a entero 10 sistema decimal
        // snapshot contiene una instantánea de la ruta actual
        // paramMap contiene un map de param de la URL
        // ! no será nulo (null) ni indefinido (undefined).
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.productService.getProduct(id)
    // promesa suscribirse al observable para recibir los datos
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back(); // navegar hacia atras en el historial del navegador
  }

  save(): void {
    if (this.product) {
      this.productService.updateProduct(this.product)
      // promesa suscribirse al observable para actualizar los datos
        .subscribe(() => this.goBack());
    }
  }

}
