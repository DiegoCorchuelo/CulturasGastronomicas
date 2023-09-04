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
    .subscribe(restaurants => this.restaurants = restaurants);
  }

  add(name: string, city: string | null, country: string | null, michelinStars: number | null, michelinDate: string | null): void {
    name = name.trim();
    if (!name) { return; }
    this.restaurantService.addRestaurant({
      name,
      city,
      country,
      michelinStars,
      michelinDate
    } as Restaurant)
      .subscribe(restaurant => {
        this.restaurants.push(restaurant);
      });
  }

  delete(restaurant: Restaurant): void {
    this.restaurants = this.restaurants.filter(r => r !== restaurant);
    this.restaurantService.deleteRestaurant(restaurant.id).subscribe();
  }
}
