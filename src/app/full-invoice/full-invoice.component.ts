import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchApiService } from '../search-api.service';
import { FullInvoice, PaymentEntry, ProductEntry } from '../Interfaces.interface';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

interface Column {
  field: string;
  header: string;
}
interface ReducedProductEntry {
  code: string;
  name: string;
  quantity: number;
  price: number;
}
  

@Component({
  selector: 'app-full-invoice',
  standalone: true,
  imports: [DynamicTableComponent, ButtonModule, ConfirmDialogModule, ToastModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './full-invoice.component.html',
  styleUrl: './full-invoice.component.scss'
})
export class FullInvoiceComponent {
  constructor(
    private route: ActivatedRoute, 
    private searchApi: SearchApiService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }
  fullInvoice: FullInvoice | null = null;
  id: string | null = '';
  paymentColumns: Column[] = [
    { field: 'amount', header: 'Amount (USD)' },
    { field: 'bank', header: 'Bank' },
    { field: 'method', header: 'Method' }
  ];
  productColumns: Column[] = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'price', header: 'Price (USD)' }
  ]
  productData: ReducedProductEntry[] = []
  paymentData: PaymentEntry[] = []
  total: number = 0;


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.searchApi.getInvoice(parseInt(this.id)).subscribe(
        (data) => {
          console.log(data);
          this.fullInvoice = data.result;

          this.paymentData = this.fullInvoice.payments;
          this.productData = this.fullInvoice.products.map((product: ProductEntry) => {
            return {
              code: product.code,
              name: product.name,
              quantity: product.quantity,
              price: product.price
            }
          });
          this.total = this.fullInvoice.payments.reduce((acc, payment) => acc + payment.amount, 0);
        }
      );
    }
  }
  confirmVoid() {
    this.confirmationService.confirm({
      message: 'You are about to void this invoice. This cannot be undone. ',
      header: 'Are you sure?',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      accept: () => {
        this.voidInvoice();
    },
    reject: () => {
        this.messageService.add({severity:'info', summary:'Action cancelled', detail:'Day was not closed', life: 3000});
    }
    })
  }

  voidInvoice() {
    this.searchApi.voidInvoice(parseInt(this.id!)).subscribe(
      (data) => {
        if (data.result) {
          if (this.fullInvoice) this.fullInvoice.void = true;
          this.messageService.add({severity:'success', summary:'Success', detail:data.result.message});
        }
      }
    );
  }

}
