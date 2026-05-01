import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { FooterComponent } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-nuestros-cursos',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './nuestros-cursos.html',
  styleUrl: './nuestros-cursos.scss',
})
export class NuestrosCursosComponent {

}
