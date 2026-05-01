import { Component } from '@angular/core';
import { OptionsMenu } from '../../../core/models/options_menu.model';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {

  isMenuOpen = false;

  optionsMenu: OptionsMenu[] = [
    {
      id: 1,
      name: "Inicio",
      url: "/"
    },
    {
      id: 2,
      name: "Certificados",
      url: "/certificados/consultar-certificado"
    },
    {
      id: 3,
      name: "Cursos",
      url: "/cursos"
    },
    {
      id: 3,
      name: "Nosotros",
      url: "/nosotros"
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
