import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PaymentMethodEntry } from '../Interfaces.interface';

@Component({
  selector: 'app-payment-method-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './payment-method-chart.component.html',
  styleUrl: './payment-method-chart.component.scss'
})
export class PaymentMethodChartComponent {
  @Input() data: PaymentMethodEntry[] = [];

  options: any;
  chartData: any;
  basicOptions: any;

  ngOnChanges() {
    this.chartData = {
      labels: this.data.map(
        (method) => method.method.split(' ')[method.method.split(' ').length - 1]
      ),
      datasets: [
        {
          label: 'Total (USD)',
          data: this.data.map((method) => method.total),
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderWidth: 1,
      }],
    };
  }
}

