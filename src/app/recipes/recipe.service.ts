import { Recipe } from './recipe.model';

export class RecipeService {

  // Make privat so it cannot be accessed by an outside component directly //
  private recipes: Recipe[] = [
    new Recipe('Pad Thai', 'A Cajun Delicacy', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'),
    new Recipe('Tandoori-Style Octopus with Fennel Slaw', 'The Best Chineese Dish',
    'https://blog.williams-sonoma.com/wp-content/uploads/2012/06/Octopus-edit-544x362.jpg')
  ];

  // Method to get the recipes array from the outside, this only returns a copy //
  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
