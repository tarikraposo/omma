import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  isSearchOpen = signal(false);
  isMenuOpen = signal(false);

  toggleSearch() {
    this.isSearchOpen.update(v => !v);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}