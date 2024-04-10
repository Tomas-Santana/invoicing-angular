import { Component, HostListener } from '@angular/core';
import { ClosingStatement } from '../Interfaces.interface';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MiniInvoiceTableComponent } from '../mini-invoice-table/mini-invoice-table.component';
import { BankChartComponent } from '../bank-chart/bank-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule, NgIf, ToastModule, ConfirmDialogModule, MiniInvoiceTableComponent, BankChartComponent],
  providers: [MessageService, ConfirmationService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }
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
    products: {product: '', sold: 0, total: 0},
    closing_time: ''
  };

  @HostListener('window:keydown.control.alt.c', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.confirmClose();
  }

  ngOnInit() {
    const body = {
      date: this.date.toISOString().split('T')[0]
    }
    this.getClosingStatement().then(data => {
      this.closingStatement = data;
      console.log(this.closingStatement); 
    });
  }
  
  async getClosingStatement(): Promise<ClosingStatement> {
    const body = {
      // format date as YYYY-MM-DD
      date: this.date.toISOString().split('T')[0]
    }

    const response = await fetch('http://127.0.0.1:5000/getClosingStatement',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    )
    type Response = {
      result: ClosingStatement
    }
    const data: Response = await response.json();
    
    return data.result;
  }

  reduceDate() {
    this.date.setDate(this.date.getDate() - 1);
    this.getClosingStatement().then(data => {
      this.closingStatement = data;
    });
  }

  increaseDate() {
    if (this.date.toISOString().split('T')[0] === new Date().toISOString().split('T')[0]) {
      this.messageService.add({severity:'warn', summary:'Warning', detail:'You cannot view future closing statements', life: 3000});
      return;
    }
    this.date.setDate(this.date.getDate() + 1);
    this.getClosingStatement().then(data => {
      this.closingStatement = data;
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

  async closeDay() {
    const response = await fetch('http://127.0.0.1:5000/close', {
      method: 'POST',
    })
    type CloseResponse = {
      result: {
        insert: boolean, 
        message: string
      }
    }
    const data: CloseResponse = await response.json();
    if (data.result.insert) {
      this.messageService.add({severity:'success', summary:'Day Closed', detail:'The day has been closed successfully', life: 3000});

      this.getClosingStatement().then(data => {
        this.closingStatement = data;
      });
      return;
    }
    this.messageService.add({severity:'error', summary:'Error', detail:data.result.message, life: 3000});
  }
}
