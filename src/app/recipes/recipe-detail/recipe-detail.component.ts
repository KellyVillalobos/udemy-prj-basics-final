import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeListDetailComponent implements OnInit {
show = false;
fadeOut = false;
@Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  // Adds the ingredients displayed in the html to the shopping list
  onAddToShoppingList() {
    // Here we make a call to the recipeService for the addIngredientsToShoppingList()
    // method and fill that method with the recipe ingredients passed to the html
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // This closes the menu after you click the selection
    this.show = !this.show;
    this.fadeOut = true;
  }

  // This opens/closes the dropdown menu
  dropDown() {
    this.show = !this.show;
    this.fadeOut = true;
  }

}
