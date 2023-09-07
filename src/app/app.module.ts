import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //  habilitar características de vinculación de datos bidireccional (two-way binding) y manipulación de formularios.

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProductsComponent } from './products/products.component';
import { CulturesComponent } from './cultures/cultures.component';
import { CultureDetailsComponent } from './culture-details/culture-details.component';

import { CultureService } from './culture.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminProductsEditComponent } from './admin-products-edit/admin-products-edit.component';
import { AdminRestaurantsEditComponent } from './admin-restaurants-edit/admin-restaurants-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesComponent,
    ProductsComponent,
    CulturesComponent,
    CultureDetailsComponent,
    RestaurantsComponent,
    AdminProductsComponent,
    AdminRestaurantsComponent,
    AdminProductsEditComponent,
    AdminRestaurantsEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CultureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
