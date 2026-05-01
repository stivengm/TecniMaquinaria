import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { FooterComponent } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-nosotros',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss',
})
export class NosotrosComponent {

  actualYear = new Date().getFullYear();
}
