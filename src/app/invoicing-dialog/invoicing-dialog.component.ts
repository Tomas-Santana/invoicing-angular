import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

type Product = {
  code: string;
  name: string;
  price: number;
  photourl?: string;
  quantity?: number;
};

type Payment = {
  name: string;
  amount: number;
  bank?: string;
};

@Component({
  selector: 'invoicing-dialog',
  standalone: true,
  imports: [DialogModule, InputTextModule, TableModule, ButtonModule],
  templateUrl: './invoicing-dialog.component.html',
  styleUrl: './invoicing-dialog.component.scss',
})
export class InvoicingDialogComponent {
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  products: Product[] = [
    {
      code: '12345',
      name: 'TENEDOR',
      price: 2,
      quantity: 3,
      photourl:
        'https://m.media-amazon.com/images/I/61U4tatR8HL._AC_UF894,1000_QL80_.jpg',
    },
    {
      code: '67890',
      name: 'SILLA',
      price: 20,
      quantity: 1,
      photourl: 'https://m.media-amazon.com/images/I/81pVe8Dl7KS.jpg',
    },
  ];

  payments: Payment[] = [
    { name: 'ZELLE', amount: 11, bank: 'BOFA' },
    { name: 'TARJETA DE CREDITO', amount: 50, bank: 'BANESCO' },
  ];
}
