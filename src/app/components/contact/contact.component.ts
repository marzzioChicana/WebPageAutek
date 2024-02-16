import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  tuRequerimiento: string = '';
  tuNombre: string = '';
  tuEmpresa: string = '';
  tuEmail: string = '';
  tuTelefono: string = '';
  tuMensaje: string = '';
  tuAceptacion: boolean = false;

  services: Service[] = [
    {value: 'encofrados', viewValue: 'Encofrados'},
    {value: 'prefabricado de concreto', viewValue: 'Prefabricado de concreto'},
    {value: 'puntales', viewValue: 'Puntales'},
    {value: 'accesorios de encofrado', viewValue: 'Accesorios de encofrado'},
    {value: 'accesorios de puntales', viewValue: 'Accesorios de puntales'},
    {value: 'otros', viewValue: 'Otros'}
  ];

  submitForm(): void {
    // Aquí puedes agregar la lógica para enviar el formulario (por ejemplo, mediante un servicio)
    console.log('Formulario enviado');
    console.log('Requerimiento:', this.tuRequerimiento);
    console.log('Nombre:', this.tuNombre);
    console.log('Empresa:', this.tuEmpresa);
    console.log('Email:', this.tuEmail);
    console.log('Teléfono:', this.tuTelefono);
    console.log('Mensaje:', this.tuMensaje);
    console.log('Aceptación:', this.tuAceptacion);
  }
}
