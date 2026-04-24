import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar';
import { FooterComponent } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-consultar-certificado-page',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './consultar-certificado-page.html',
  styleUrl: './consultar-certificado-page.scss',
})
export class ConsultarCertificadoPage {

}
