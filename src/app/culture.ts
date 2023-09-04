import { Product } from "./product";
import { Recipe } from "./recipe";
import { Restaurant } from "./restaurant";

export interface Culture {
  id: number;
  name: string;
  photo: string;
  description: string;
  countries: string[];
  products: Product[];
  recipes: Recipe[];
  restaurants: Restaurant[];
}
