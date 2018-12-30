import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  // Get the ingredients from the ingredients array to be
  // sent to the shopping list to be displayed
  getIngredients() {
    // Returns only a copy of the array
    return this.ingredients.slice();
  }

  // Add ingredients to the ingredients array manually from
  // the shopping list html
  addIngredient(ingredient: Ingredient) {
    // adds the new ingredients from the html to the
    // ingredients array
    this.ingredients.push(ingredient);
    // Emits the changed array to the components to be used
    // slice only sends a copy of the array
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // adds the ingredients from the recipe to the ingredients array
    // using the spread operator (...Array) to be able to push an array
    // instead of a single object
    this.ingredients.push(...ingredients);
    // Again emitting the changed array by sending a copy of it
    // to the components that will use the addIngredients() method
    this.ingredientsChanged.emit(this.ingredients.slice());
  }


  constructor() { }
}
