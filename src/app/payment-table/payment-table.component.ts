import { Component } from '@angular/core';
import { TableModule } from 'primeng/table'

@Component({
  selector: 'app-payment-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './payment-table.component.html',
  styleUrl: './payment-table.component.scss'
})
export class PaymentTableComponent {

}
