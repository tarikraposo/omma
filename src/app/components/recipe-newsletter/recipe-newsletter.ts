import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-newsletter',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './recipe-newsletter.html',
  styleUrl: './recipe-newsletter.scss',
})
export class RecipeNewsletter {
  email = signal('');
  submitted = signal(false);

  submit() {
    if (!this.email()) return;

    this.submitted.set(true);

    // aqui você poderia chamar API futuramente
    console.log('Email cadastrado:', this.email());
  }
}
