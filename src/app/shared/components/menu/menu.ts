import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {

  optionsMenu = [
    {
      id: 1,
      name: "Métricas",
      icon: "",
      url: "/admin/dashboard"
    },
    {
      id: 2,
      name: "Operadores",
      icon: "",
      url: ""
    },
    {
      id: 3,
      name: "Certificaciones",
      icon: "",
      url: ""
    },
    {
      id: 4,
      name: "Ajustes",
      icon: "",
      url: ""
    }
  ]


}
