import { Component } from '@angular/core';
import { RecipeCategories } from "../../components/recipe-categories/recipe-categories";
import { RecipeHero } from "../../components/recipe-hero/recipe-hero";
import { RecipeGrid } from "../../components/recipe-grid/recipe-grid";
import { RecipeFeatured } from "../../components/recipe-featured/recipe-featured";
import { RecipeNewsletter } from "../../components/recipe-newsletter/recipe-newsletter";

@Component({
  selector: 'app-home',
  imports: [RecipeCategories, RecipeHero, RecipeGrid, RecipeFeatured, RecipeNewsletter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
