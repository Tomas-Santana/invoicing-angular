import { Component, EventEmitter, Output } from '@angular/core';
import { TableModule } from 'primeng/table'
import { ProductPaymentAddComponent } from '../product-payment-add/product-payment-add.component';

type Product = {
  code: string,
  name: string,
  price: number,
  photourl?: string,
  quantity?: number, 
}

@Component({
  selector: 'product-view',
  standalone: true,
  imports: [TableModule, ProductPaymentAddComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {
  taxAmount = 0.1;
  @Output() totalInvoice = new EventEmitter<number>();
  products: Product[] =  [{
      "code":"12345",
      "name":'TENEDOR',
      "price": 2,
      "quantity":3,
      "photourl":'https://m.media-amazon.com/images/I/61U4tatR8HL._AC_UF894,1000_QL80_.jpg'
    },
    {
      "code":"67890",
      "name":"SILLA",
      "price":20,
      "quantity":1,
      "photourl":"https://m.media-amazon.com/images/I/81pVe8Dl7KS.jpg"
    },
    {
      "code":"13579",
      "name":"VELA AROMATICA",
      "price":20,
      "quantity":2,
      "photourl":"https://m.media-amazon.com/images/I/612sOIz0HEL._UF1000,1000_QL80_.jpg"
    },
    {
      "code":"24680",
      "name":"LAMPARA",
      "price":25,
      "quantity":1,
      "photourl":"https://m.media-amazon.com/images/I/61uLmGqbcVL._AC_UF894,1000_QL80_.jpg"
    }
  ];
  fetchData() {
  }

  getTotals() {
    return this.products.reduce((accum, current) => accum+current.price, 0)
  }
}


