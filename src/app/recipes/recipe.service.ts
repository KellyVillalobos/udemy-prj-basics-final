import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  // Make privat so it cannot be accessed by an outside component directly //
  private recipes: Recipe[] = [
    new Recipe(
      'Pad Thai',
      'The King of Thia food',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg',
      [
        new Ingredient('Rice Noodels', 1),
        new Ingredient('Canola Oil', 1),
        new Ingredient('Tofu', 1),
        new Ingredient('Eggs', 3),
        new Ingredient('Rice Vinegar', 1),
        new Ingredient('Fish Sauce', 1),
        new Ingredient('Granulated Sugar', 1)
      ]),
    new Recipe('Tandoori-Style Octopus with Fennel Slaw',
    'An Indian delacacy',
    'https://blog.williams-sonoma.com/wp-content/uploads/2012/06/Octopus-edit-544x362.jpg',
    [
        new Ingredient('Pear Vinegar', 1),
        new Ingredient('Red Wine Vinegar', 1),
        new Ingredient('Honey', 1),
        new Ingredient('Kosher Salt', 1),
        new Ingredient('Fennel Seeds', 1),
        new Ingredient('Celery Stalk', 1),
        new Ingredient('Fennel Bulb', 1)
    ])
  ];

  // Method to get the recipes array from the outside, this only returns a copy //
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }
}
