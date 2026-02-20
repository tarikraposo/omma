import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgClass } from '@angular/common';
import { MatCardContent, MatCard } from '@angular/material/card';

interface Recipe {
  title: string;
  description: string;
  image: string;
  time: string;
  servings: number;
  difficulty: string;
  category: string;
}

@Component({
  selector: 'app-recipe-grid',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgClass, MatCardContent, MatCard],
  templateUrl: './recipe-grid.html',
  styleUrl: './recipe-grid.scss',
})
export class RecipeGrid {
  filters = ['Todas', 'Facil', 'Intermediario', 'Avancado'];

  activeFilter = signal('Todas');
  likedRecipes = signal<Set<string>>(new Set());

  recipes: Recipe[] = [
    {
      title: 'Feijoada Tradicional',
      description: 'O classico brasileiro...',
      image: '/images/recipe-feijoada.jpg',
      time: '3h 30min',
      servings: 8,
      difficulty: 'Intermediario',
      category: 'Pratos Quentes',
    },
    // resto omitido aqui pra não ficar gigante
  ];

  filteredRecipes = computed(() => {
    if (this.activeFilter() === 'Todas') return this.recipes;
    return this.recipes.filter((r) => r.difficulty === this.activeFilter());
  });

  toggleLike(title: string) {
    const current = new Set(this.likedRecipes());
    current.has(title) ? current.delete(title) : current.add(title);
    this.likedRecipes.set(current);
  }

  isLiked(title: string) {
    return this.likedRecipes().has(title);
  }
}
