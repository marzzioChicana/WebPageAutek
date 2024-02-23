import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: string[] = [
    'assets/logos-empresas/aje.png',
    'assets/logos-empresas/comesa.png',
    'assets/logos-empresas/fibrafil.png',
    'assets/logos-empresas/funespa.png',
    'assets/logos-empresas/geohidraulica.png',
    'assets/logos-empresas/masterdrilling.png',
    'assets/logos-empresas/tramarsa.png',
    'assets/logos-empresas/volcan.png',
    'assets/logos-empresas/vulco.png',
  ];

  activeImage: string | null = null;
  isHovered = false;

  setActiveImage(image: string | null): void {
    this.activeImage = image;
  }

  setHoverStatus(status: boolean): void {
    this.isHovered = status;
    if (!status) {
      this.activeImage = null;
    }
  }

  imagesC = [
    { url: 'assets/services-company/mecanizado.jpg' },
    { url: 'assets/services-company/soldadura.jpg' },
    { url: 'assets/services-company/torno.jpg' }
  ];

  currentIndex = 0;

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imagesC.length) % this.imagesC.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imagesC.length;
  }
}
