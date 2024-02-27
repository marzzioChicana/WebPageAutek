import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {
  logoPath: string = 'assets/logo-autek.png';

  activeButtonId: string | null = null;

  setActive(id: string) {
    this.activeButtonId = id;
    this.setInactiveOpacity();
  }

  clearActive() {
    this.activeButtonId = null;
    this.setNormalOpacity();
  }

  private setInactiveOpacity() {
    const buttons = document.querySelectorAll('.toolbar-button');
    buttons.forEach((button: Element) => { // Cambiamos HTMLElement a Element
      if ((button as HTMLElement).id !== this.activeButtonId) {
        (button as HTMLElement).classList.add('inactive');
      }
    });
  }
  
  private setNormalOpacity() {
    const buttons = document.querySelectorAll('.toolbar-button');
    buttons.forEach((button: Element) => { // Cambiamos HTMLElement a Element
      (button as HTMLElement).classList.remove('inactive');
    });
  }
}
