import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { FooterComponent } from '../../../../shared/components/footer/footer';
import { DataAppServices } from '../../../../core/services/data-app';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    FooterComponent,
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent {

  actualYear = new Date().getFullYear();

  constructor(
    private dataApp: DataAppServices
  ) {}
  
  goToPage(link: string) {
    this.dataApp.goToLink(link);
  }
}
