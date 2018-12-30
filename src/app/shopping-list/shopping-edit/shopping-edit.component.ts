import { ShoppingListService } from './../shopping-list.service';
import {Component, ElementRef, OnInit, ViewChild, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

export interface Measure {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  // These are linked to the html inputs for the name and amount
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    // Here we create const variables from the @ViewChild decorators.
    // whatever is inputed in these fields they are assigned to the new variables
    // then those inputs are used to create a new Ingredient() and the
    // ShoppingListService is used to call addIngredinet() to add the new ingredient
    // to the ingredients array in the ShoppingListService.
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
