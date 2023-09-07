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
    // promesa suscribirse al observable para recibir los datos
    .subscribe(products => this.products = products);
  }

  add(name: string, description: string | null, history: string | null, category: string | null, photo: string | null): void {
    // Elimina espacios en blanco del nombre.
    name = name.trim();
    // Verifica si el nombre está vacío y sale de la función si es así.
    if (!name) { return; }
    this.productsService.addProduct({
      name,
      description,
      history,
      category,
      photo
    } as Product)
      .subscribe(product => { // promesa suscribirse a la respuesta del servicio
        this.products.push(product);
      });
  }

  handlePhotoChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Crea una instancia de FileReader, que se utiliza para leer el contenido del archivo.
      const reader = new FileReader();
      // Cuando el archivo esté listo, hacer esto:
      reader.onload = (e: any) => {
        // Guardar la imagen como URL de datos.
        this.selectedPhoto = e.target.result; // result contiene los datos del archivo seleccionado en forma de una URL
      };
      // Leer el archivo como URL de datos.
      reader.readAsDataURL(file);
    }
  }

  delete(product: Product): void {
    // Si p no es igual al product que se quiere eliminar (product), entonces ese elemento p se incluye en la nueva lista resultante.
    // si p es igual al product ese elemento se excluye de la nueva lista
    this.products = this.products.filter(p => p !== product);

    // promesa suscribirse al observable para eliminar los datos
    this.productsService.deleteProduct(product.id).subscribe();
  }

}
