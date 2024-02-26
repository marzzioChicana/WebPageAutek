import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatIconModule],
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

  imagesC: string[] = ['assets/services-company/mecanizado.jpg', 'assets/services-company/soldadura.jpg', 'assets/services-company/torno.jpg']; // Replace with your image URLs
  currentIndex: number = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.imagesC.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.imagesC.length - 1) ? 0 : this.currentIndex + 1;
  }
}
