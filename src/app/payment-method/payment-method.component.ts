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
  payments: string[] = ['Cash', 'Credit', 'Zelle', 'Transfer'];
  coins: string[] = ['BS', 'USD'];
}
