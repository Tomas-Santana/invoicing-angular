import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'payment-client',
  standalone: true,
  imports: [InputTextModule, ButtonModule, SearchModalComponent, CommonModule],
  templateUrl: './payment-client.component.html',
  styleUrl: './payment-client.component.scss',
})
export class PaymentClientComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = !this.visible;
    console.log(this.visible);
  }
}
