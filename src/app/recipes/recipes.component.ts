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
                                                         //al inicio / un espacio / almenos un número / un punto / un espacio /(gm)global multiline
    return preparation.replace(/\n/g, '<br>').replace(/^\s*\d+\.\s*/gm, '<p>');
  }
  // Reemplaza todas las ocurrencias de salto de línea '\n' con la etiqueta '<br>'.

  // Reemplaza todas las secuencias que comienzan con un número seguido de un punto y espacio "1. " con '<p>'.
}
