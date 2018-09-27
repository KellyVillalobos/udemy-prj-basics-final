import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeListDetailComponent implements OnInit {
show = false;
fadeOut = false;
@Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
  fadeToggle() {
    this.show = !this.show;
    this.fadeOut = true;

  }

}
