import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'payment-method',
  standalone: true,
  imports: [InputNumberModule, DropdownModule, ButtonModule],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss',
})
export class PaymentMethodComponent {
  selectedPayment = 'Cash'
  payments: Object = {
    'Cash': [],
    'Credit': ['Venezuela', 'BNC', 'Banesco', 'Mercantil', 'Banplus'],
    'Debit': ['Venezuela', 'BNC', 'Banesco', 'Mercantil', 'Banplus'], 
    'Transfer': ['Venezuela', 'BNC', 'Banesco', 'Mercantil', 'Banplus'], 
    'PagoMovil': ['Venezuela', 'BNC', 'Banesco', 'Mercantil', 'Banplus'], 
    'Zelle': ['BOFA', 'CHASE'],
  };
  coins: Object = {
    'BS': ['Cash', 'Credit', 'Debit', 'Transfer', 'PagoMovil'],
    'USD': ['Cash', 'Credit', 'Zelle']
  };

  getAllPayments = () => Object.keys(this.payments);
  getPayments = () => {
    return Object.entries(this.payments)
      .filter((entry) => entry[0] == this.selectedPayment)
      [0][1];
  }
  getCoins = () => Object.keys(this.coins);
}
