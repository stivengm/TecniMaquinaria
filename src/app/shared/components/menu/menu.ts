import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {

  optionsMenu = [
    {
      id: 1,
      name: "Métricas",
      icon: "",
      url: ""
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
