import { AfterViewInit, Component } from '@angular/core';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class ChartComponent implements AfterViewInit {

  chart: any;

  ngAfterViewInit(): void {
    const ctx = document.getElementById('monthlyChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',

      data: {
        labels: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN'],

        datasets: [
          {
            label: 'Fondo',
            data: [30, 40, 50, 55, 65, 48],
            backgroundColor: '#333333',
            borderRadius: 0,
            barThickness: 74,
            borderSkipped: false
          },

          {
            label: 'Ventas',
            data: [0, 0, 58, 0, 72, 0],
            backgroundColor: '#FFD600',
            borderRadius: 0,
            barThickness: 74,
            borderSkipped: false
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        animation: {
          duration: 1400
        },

        plugins: {
          legend: {
            display: false
          },

          tooltip: {
            enabled: true
          }
        },

        scales: {

          x: {
            stacked: true,

            grid: {
              display: false
            },

            ticks: {
              color: '#73839B',
              font: {
                size: 12,
                weight: 'bold'
              }
            }
          },

          y: {
            stacked: true,
            display: false,

            grid: {
              display: false
            }
          }
        }
      }
    });
  }

}
