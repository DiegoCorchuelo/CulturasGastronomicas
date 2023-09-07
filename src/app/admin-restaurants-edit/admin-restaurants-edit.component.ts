import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-admin-restaurants-edit',
  templateUrl: './admin-restaurants-edit.component.html',
  styleUrls: ['./admin-restaurants-edit.component.css']
})
export class AdminRestaurantsEditComponent implements OnInit {

  restaurant: Restaurant | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(): void {
        // convertir cadena a entero 10 sistema decimal
        // snapshot contiene una instantánea de la ruta actua
        // paramMap contiene un map de param de la URL
        // ! no será nulo (null) ni indefinido (undefined).
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.restaurantService.getRestaurant(id)
    // promesa suscribirse al observable para recibir los datos
      .subscribe(restaurant => this.restaurant = restaurant);
  }

  goBack(): void {
    this.location.back(); // navegar hacia atras en el historial del navegador
  }

  save(): void {
    if (this.restaurant) {
      this.restaurantService.updateRestaurant(this.restaurant)
      // promesa suscribirse al observable para actualizar los datos
        .subscribe(() => this.goBack());
    }
  }
}
