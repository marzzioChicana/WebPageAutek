import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
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
}
