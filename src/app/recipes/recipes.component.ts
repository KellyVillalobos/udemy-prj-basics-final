import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // Recipe object
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // Here we call to the recipie service to check for
    // the selected recipe we clicked on and subscribe that
    // recipes data to the selectedRecipe object instantiated
    // in this component for display in the html.
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
      this.selectedRecipe = recipe;
  });
  }

}
