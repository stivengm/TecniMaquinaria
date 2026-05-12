import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { FooterComponent } from '../../../../shared/components/footer/footer';
import { DataAppServices } from '../../../../core/services/data-app';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    FooterComponent,
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent implements AfterViewInit {

  actualYear = new Date().getFullYear();

  constructor(
    private dataApp: DataAppServices
  ) {}
  
  ngAfterViewInit(): void {
    new Typed('#typing', {
      strings: [
        'de la industria',
        'de la Retroexcavadora',
        'de maquinaria Amarilla'
      ],

      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  goToPage(link: string) {
    this.dataApp.goToLink(link);
  }
}
