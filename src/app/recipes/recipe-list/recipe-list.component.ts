import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output()recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Shrimp Au Tufe', 'A Cajun Delicacy', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'),
    new Recipe('Kung Pao Chicken', 'The Best Chineese Dish', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
