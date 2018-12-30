import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  // Instantiate the ingredients array to be used in this component
  ingredients: Ingredient[];

  // Add the ShoppingListService to be able to use it in this component
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // When the application loads the ingredients will be added to
    // the ingredients array in this component from the ShoppingListService
    // using the getIngredients() method then when the ingredients array
    // changes the ingredientsChanged() method will be called and the new
    // ingredents will be added to be used in this component
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
