import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'product-payment-add',
  standalone: true,
  imports: [InputTextModule, InputNumberModule, ButtonModule, SearchModalComponent, OverlayPanelModule],
  templateUrl: './product-payment-add.component.html',
  styleUrl: './product-payment-add.component.scss'
})
export class ProductPaymentAddComponent {

  currentQuantity:number = 0
  setQuantity(amount: number) {
    if (this.currentQuantity + amount < 0) return;
    this.currentQuantity += amount;
  }
}
