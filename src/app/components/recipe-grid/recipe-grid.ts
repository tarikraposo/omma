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
    title: "Feijoada Tradicional",
    description: "O classico brasileiro com feijao preto, carnes defumadas, arroz, couve e farofa.",
    image: "/images/recipe-feijoada.jpg",
    time: "3h 30min",
    servings: 8,
    difficulty: "Intermediario",
    category: "Pratos Quentes",
  },
  {
    title: "Pasteis de Nata",
    description: "Deliciosos pasteis de nata com massa folhada crocante e creme aveludado.",
    image: "/images/recipe-pasteis.jpg",
    time: "1h 20min",
    servings: 12,
    difficulty: "Avancado",
    category: "Confeitaria",
  },
  {
    title: "Tigela de Acai",
    description: "Acai cremoso com granola, banana, morango e flocos de coco. Pura energia.",
    image: "/images/recipe-acai.jpg",
    time: "15min",
    servings: 2,
    difficulty: "Facil",
    category: "Sobremesas",
  },
  {
    title: "Pao de Queijo Mineiro",
    description: "Pao de queijo quentinho com casquinha crocante e interior macio.",
    image: "/images/recipe-pao-queijo.jpg",
    time: "45min",
    servings: 30,
    difficulty: "Facil",
    category: "Confeitaria",
  },
  {
    title: "Moqueca Baiana",
    description: "Moqueca de peixe com leite de coco, dende, pimentoes e coentro fresco.",
    image: "/images/recipe-moqueca.jpg",
    time: "1h 10min",
    servings: 4,
    difficulty: "Intermediario",
    category: "Frutos do Mar",
  },
  {
    title: "Salada Tropical",
    description: "Salada fresca com manga, abacate, camarao grelhado e molho de limao.",
    image: "/images/recipe-salada.jpg",
    time: "25min",
    servings: 2,
    difficulty: "Facil",
    category: "Saladas",
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
