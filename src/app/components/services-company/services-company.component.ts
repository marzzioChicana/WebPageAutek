import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-services-company',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './services-company.component.html',
  styleUrl: './services-company.component.css'
})
export class ServicesCompanyComponent {
  onMouseOver(event: MouseEvent) {
    // Lógica que deseas ejecutar cuando el cursor se coloca sobre la tarjeta
  }

  onMouseLeave(event: MouseEvent) {
    // Lógica que deseas ejecutar cuando el cursor se aleja de la tarjeta
  }
}
