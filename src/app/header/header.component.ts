import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']



})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  recipeClass = true;
  shoppingListClass = false;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    if (feature === 'shopping-list') {
      this.recipeClass = false;
      this.shoppingListClass = true;
    } else {
      this.recipeClass = true;
      this.shoppingListClass = false;
    }
  }

}
