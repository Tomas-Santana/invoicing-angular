import { Component } from '@angular/core';
import { InvoiceEntry } from '../Interfaces.interface';
import { Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-mini-invoice-table',
  standalone: true,
  imports: [TableModule, CheckboxModule, NgIf],
  templateUrl: './mini-invoice-table.component.html',
  styleUrl: './mini-invoice-table.component.scss'
})
export class MiniInvoiceTableComponent {
  @Input() invoices: InvoiceEntry[] = [];
  @Input() width: number = 400;
}
