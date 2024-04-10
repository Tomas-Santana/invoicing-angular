import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'product-payment-add',
  standalone: true,
  imports: [InputTextModule, InputNumberModule, ButtonModule],
  templateUrl: './product-payment-add.component.html',
  styleUrl: './product-payment-add.component.scss'
})
export class ProductPaymentAddComponent {

}
