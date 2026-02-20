import { Component } from '@angular/core';
import { RecipeCategories } from "../../components/recipe-categories/recipe-categories";

@Component({
  selector: 'app-home',
  imports: [RecipeCategories],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
