import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { BankEntry } from '../Interfaces.interface';

@Component({
  selector: 'app-bank-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bank-chart.component.html',
  styleUrl: './bank-chart.component.scss',
})
export class BankChartComponent {
  @Input() data: BankEntry[] = [];

  options: any;
  chartData: any;
  basicOptions: any;

  ngOnInit() {
    this.chartData = {
      labels: this.data.map((bank) => bank.bank),
      datasets: [
        {
          label: 'Total (USD)',
          data: this.data.map((bank) => bank.total),
          borderWidth: 1,
      }],
    };
    console.log(this.chartData);
    this.basicOptions = {
      plugins: {},
      scales: {
        y: {
          beginAtZero: true,
          ticks: {},
          grid: {
            drawBorder: false,
          },
        },
        x: {
          ticks: {},
          grid: {
            drawBorder: false,
          },
        },
      },
    };
  }
  ngOnChanges() {
    this.chartData = {
      labels: this.data.map((bank) => bank.bank),
      datasets: [
        {
          label: 'Total (USD)',
          data: this.data.map((bank) => bank.total),
          borderWidth: 1,
      }],
    };
  }
}
