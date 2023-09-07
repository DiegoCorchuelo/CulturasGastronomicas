import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html',
  styleUrls: ['./admin-restaurants.component.css']
})
export class AdminRestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];
  selectedPhoto: string | null = null; // Holds the selected image URL

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
    // promesa suscribirse al observable para recibir los datos
    .subscribe(restaurants => this.restaurants = restaurants);
  }

  add(name: string, city: string | null, country: string | null, michelinStars: number | null, michelinDate: string | null): void {
    // Elimina espacios en blanco del nombre.
    name = name.trim();
    // Verifica si el nombre está vacío y sale de la función si es así.
    if (!name) { return; }
    this.restaurantService.addRestaurant({
      name,
      city,
      country,
      michelinStars,
      michelinDate
    } as Restaurant)
      .subscribe(restaurant => { // promesa suscribirse a la respuesta del servicio
        this.restaurants.push(restaurant);
      });
  }

  delete(restaurant: Restaurant): void {
    // Si p no es igual al product que se quiere eliminar (product), entonces ese elemento p se incluye en la nueva lista resultante.
    // si p es igual al product ese elemento se excluye de la nueva lista
    this.restaurants = this.restaurants.filter(r => r !== restaurant);
    // promesa suscribirse al observable para eliminar los datos
    this.restaurantService.deleteRestaurant(restaurant.id).subscribe();
  }
}
