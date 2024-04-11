import { Component } from '@angular/core';
import { InvoiceEntry } from '../Interfaces.interface';
import { Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-invoice-table',
  standalone: true,
  imports: [NgIf, TableModule, ButtonModule, RouterLink],
  templateUrl: './search-invoice-table.component.html',
  styleUrl: './search-invoice-table.component.scss'
})
export class SearchInvoiceTableComponent {
  @Input() invoices: InvoiceEntry[] = [];
}
