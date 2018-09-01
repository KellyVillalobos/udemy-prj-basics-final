import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeListDetailComponent implements OnInit {
show = false;
fadeOut = false

  constructor() { }

  ngOnInit() {
  }
  fadeToggle() {
    this.show = !this.show;
    this.fadeOut = true;

  }

}
