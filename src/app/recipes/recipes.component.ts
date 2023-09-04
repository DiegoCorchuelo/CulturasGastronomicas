import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  title = "Recipes";
  recipes: Recipe[] = RECIPES;

  // Función para formatear la preparación
  formatPreparation(preparation: string): string {
    return preparation.replace(/\n/g, '<br>').replace(/^\s*\d+\.\s*/gm, '<p>');
  }
}
