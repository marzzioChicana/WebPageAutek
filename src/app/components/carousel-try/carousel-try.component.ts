import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Image {
  src: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel-try',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-try.component.html',
  styleUrl: './carousel-try.component.css'
})
export class CarouselTryComponent implements OnInit {
  currentIndex: number = 0;
  images: Image[] = [
    {
      src: 'assets/services-company/mecanizado.jpg',
      category: 'Mecanizado',
      title: 'Slider 01',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.'
    },
    {
      src: 'assets/services-company/soldadura.jpg',
      category: 'Soldadura',
      title: 'Slider 02',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?'
    },
    {
      src: 'assets/services-company/torno.jpg',
      category: 'Torno',
      title: 'Slider 03',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?'
    }
    // Agrega el resto de las imágenes aquí
  ];

  constructor() { }

  ngOnInit(): void {
    // Inicia el temporizador para cambiar automáticamente de slide cada 5 segundos
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  selectSlide(index: number) {
    this.currentIndex = index;
  }
}
