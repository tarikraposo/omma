import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

interface Category {
  name: string;
  icon: string;
  count: number;
  description: string;
}

@Component({
  selector: 'app-recipe-categories',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgClass],
  templateUrl: './recipe-categories.html',
  styleUrl: './recipe-categories.scss',
})
export class RecipeCategories {
  hoveredIndex = signal<number | null>(null);

  categories: Category[] = [
    {
      name: 'Pratos Quentes',
      icon: 'local_fire_department',
      count: 24,
      description: 'Sopas, ensopados e pratos reconfortantes',
    },
    {
      name: 'Saladas',
      icon: 'eco',
      count: 18,
      description: 'Frescas, coloridas e nutritivas',
    },
    {
      name: 'Sobremesas',
      icon: 'icecream',
      count: 31,
      description: 'Doces que encantam o paladar',
    },
    {
      name: 'Frutos do Mar',
      icon: 'set_meal',
      count: 15,
      description: 'O melhor do oceano na sua mesa',
    },
    {
      name: 'Carnes',
      icon: 'restaurant',
      count: 22,
      description: 'Cortes especiais e preparo artesanal',
    },
    {
      name: 'Confeitaria',
      icon: 'cake',
      count: 27,
      description: 'Bolos, tortas e pães caseiros',
    },
  ];
}
