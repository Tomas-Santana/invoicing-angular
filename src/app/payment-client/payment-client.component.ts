import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'payment-client',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './payment-client.component.html',
  styleUrl: './payment-client.component.scss',
})
export class PaymentClientComponent {}
