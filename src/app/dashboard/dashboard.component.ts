import { Component, HostListener } from '@angular/core';
import { ClosingStatement } from '../Interfaces.interface';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview'
import { NgIf } from '@angular/common';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MiniInvoiceTableComponent } from '../mini-invoice-table/mini-invoice-table.component';
import { MiniProductTableComponent } from '../mini-product-table/mini-product-table.component';
import { BankChartComponent } from '../bank-chart/bank-chart.component';
import { PaymentMethodChartComponent } from '../payment-method-chart/payment-method-chart.component';
import { DashboardApiService } from '../dashboard-api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule, NgIf, ToastModule, ConfirmDialogModule, MiniInvoiceTableComponent, BankChartComponent, TabViewModule, PaymentMethodChartComponent, MiniProductTableComponent],
  providers: [MessageService, ConfirmationService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private dashboardApiService: DashboardApiService
  ) { }
  title = "Dashboard"
  date = new Date();
  closingStatement: ClosingStatement = {
    date: this.date.toISOString().split('T')[0],
    day_total: 0,
    invoice_quantity: 0,
    average_invoice: 0,
    invoices: [],
    banks: [],
    methods: [],
    products: [],
    closing_time: ''
  };

  @HostListener('window:keydown.control.alt.c', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.confirmClose();
  }

  ngOnInit() {
    this.dashboardApiService.getClosingStatement(this.date.toISOString().split('T')[0]).subscribe(data => {
      this.closingStatement = data.result;
    });
  }

  reduceDate() {
    this.date.setDate(this.date.getDate() - 1);
    this.dashboardApiService.getClosingStatement(this.date.toISOString().split('T')[0]).subscribe(data => {
      this.closingStatement = data.result;
    });
  }

  increaseDate() {
    if (this.date.toISOString().split('T')[0] === new Date().toISOString().split('T')[0]) {
      this.messageService.add({severity:'warn', summary:'Warning', detail:'You cannot view future closing statements', life: 3000});
      return;
    }
    this.date.setDate(this.date.getDate() + 1);
    this.dashboardApiService.getClosingStatement(this.date.toISOString().split('T')[0]).subscribe(data => {
      this.closingStatement = data.result;
    });    
  }
  confirmClose() {
    if (this.closingStatement.closing_time !== '') return
    this.confirmationService.confirm({
      message: 'You are about to close for the day. This action cannot be undone. Do you want to proceed?',
      header: 'Are you sure?',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      accept: () => {
          this.closeDay();
      },
      reject: () => {
          this.messageService.add({severity:'info', summary:'Action cancelled', detail:'Day was not closed', life: 3000});
      }
    });
  }

  closeDay() {
    this.dashboardApiService.closeRegister().subscribe(data => {
      if (data.result.insert) {
        this.messageService.add({severity:'success', summary:'Success', detail:data.result.message, life: 3000});
        this.closingStatement.closing_time = new Date().toISOString().split('T')[1];
      }
      else {
        this.messageService.add({severity:'error', summary:'Error', detail:data.result.message, life: 3000});
      }
    });

  }
}
