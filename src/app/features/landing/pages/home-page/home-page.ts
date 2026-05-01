import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { FooterComponent } from '../../../../shared/components/footer/footer';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent {

  actualYear = new Date().getFullYear();

  constructor(private router: Router) {
    
  }
  
  goToPage(link: string) {
    this.router.navigate([link]);
  }
}
