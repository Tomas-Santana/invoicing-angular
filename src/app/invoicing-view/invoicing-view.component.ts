import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

type Invoice = {
  id: number,
  client: string,
  date: Date
}

@Component({
  selector: 'app-invoicing-view',
  standalone: true,
  imports: [TableModule, InputTextModule, ButtonModule],
  templateUrl: './invoicing-view.component.html',
  styleUrl: './invoicing-view.component.scss'
})
export class InvoicingViewComponent {
  invoices: Invoice[] = [
    {"id":2,"client":"Miguel Santana","date":new Date("2024-04-10")},
    {"id":3,"client":"Miguel Santana","date":new Date("2024-04-11")},
    {"id":4,"client":"Erika Santana","date":new Date('2024-04-10')},
    {"id":5,"client":"Erika Santana","date":new Date('2024-04-11')},
    {"id":6,"client":"Tomas Santana","date":new Date('2024-04-09')}, 
    {"id":7,"client":"Tomas Santana","date":new Date('2024-04-11')}, 
    {"id":8,"client":"Simon Bolivar","date":new Date('2024-04-09')},
    {"id":9,"client":"Simon Bolivar","date":new Date('2024-04-11')}
  ];
}
