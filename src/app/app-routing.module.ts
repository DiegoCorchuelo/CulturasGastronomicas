import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ProductsComponent } from './products/products.component';
import { CulturesComponent } from './cultures/cultures.component';
import { CultureDetailsComponent } from './culture-details/culture-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductsEditComponent } from './admin-products-edit/admin-products-edit.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminRestaurantsEditComponent } from './admin-restaurants-edit/admin-restaurants-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/cultures', pathMatch: 'full' },
  { path: 'cultures', component: CulturesComponent },
  { path: 'culture/:id', component: CultureDetailsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'product/:id', component: AdminProductsEditComponent },
  { path: 'admin-restaurants', component: AdminRestaurantsComponent },
  { path: 'restaurant/:id', component: AdminRestaurantsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
