import { Component } from '@angular/core';
import { ProductViewComponent } from '../product-view/product-view.component';
import { PaymentViewComponent } from '../payment-view/payment-view.component';
import { TabViewModule } from 'primeng/tabview'

@Component({
  selector: 'app-invoicing',
  standalone: true,
  imports: [ProductViewComponent, PaymentViewComponent, TabViewModule],
  templateUrl: './invoicing.component.html',
  styleUrl: './invoicing.component.scss'
})
export class InvoicingComponent {
  title = "New Invoice"

}
