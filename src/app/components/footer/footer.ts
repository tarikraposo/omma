import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  receitas = [
    'Pratos Quentes',
    'Sobremesas',
    'Confeitaria',
    'Saladas'
  ];

  sobre = [
    'Nossa História',
    'Equipe',
    'Parcerias'
  ];

  redes = [
    'Instagram',
    'YouTube',
    'Pinterest'
  ];

}