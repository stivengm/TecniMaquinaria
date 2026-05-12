import { Component } from '@angular/core';
import { MenuComponent } from '../../../../shared/components/menu/menu';
import { FooterComponent } from '../../../../shared/components/footer/footer';
import { ChartComponent } from '../../../../shared/components/chart/chart';

@Component({
  selector: 'app-dashboard',
  imports: [
    MenuComponent,
    FooterComponent,
    ChartComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
