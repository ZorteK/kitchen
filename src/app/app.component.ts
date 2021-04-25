import {Component, OnInit} from '@angular/core';
import {Recipe} from './recette/Recipe';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  change(): void {
    this.recipeService.randomRecipe()
      .subscribe(result => this.recipe = result);
  }

  ngOnInit(): void {
    this.change();
  }
}
