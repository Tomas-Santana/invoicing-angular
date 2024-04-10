import { Component } from '@angular/core';
import { TableModule } from 'primeng/table'
import { PaymentClientComponent } from '../payment-client/payment-client.component';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';
import { PaymentTableComponent } from '../payment-table/payment-table.component';

type Payment = {
  name: string,
  amount: number,
  bank?: string
}

@Component({
  selector: 'payment-view',
  standalone: true,
  imports: [TableModule, PaymentClientComponent, PaymentMethodComponent, PaymentTableComponent],
  templateUrl: './payment-view.component.html',
  styleUrl: './payment-view.component.scss'
})
export class PaymentViewComponent {
  payments: Payment[] = [
    {"name":"ZELLE","amount":11,"bank":"BOFA"},
    {"name":"TARJETA DE CREDITO","amount":50,"bank":"BANESCO"},
    {"name":"TARJETA DE CREDITO","amount":50,"bank":"BANESCO"},
    {"name":"TARJETA DE DEBITO","amount":7,"bank":"VENEZUELA"},
    {"name":"ZELLE","amount":80,"bank":"CHASE"},
    {"name":"TARJETA DE CREDITO","amount":12.4,"bank":"BANESCO"},
    {"name":"ZELLE","amount":22,"bank":"CHASE"}
  ];
}
