import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected title = 'TecniMaquinaria';

  ngAfterViewInit() {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }
}
