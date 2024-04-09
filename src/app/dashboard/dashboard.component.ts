import { Component,  } from '@angular/core';
import { ClosingStatement } from '../Interfaces.interface';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
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
    products: {product: '', sold: 0, total: 0}
  };

  ngOnInit() {
    const body = {
      // format date as YYYY-MM-DD
      date: this.date.toISOString().split('T')[0]
    }
    this.getClosingStatement().then(data => {
      this.closingStatement = data;
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
}
