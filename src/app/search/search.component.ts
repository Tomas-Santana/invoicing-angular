import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InvoiceEntry } from '../Interfaces.interface';
import { SearchInvoiceTableComponent } from '../search-invoice-table/search-invoice-table.component';
import { MessageService } from 'primeng/api';
import { SearchApiService } from '../search-api.service';
import { ToastModule } from 'primeng/toast';

interface Field {
  displayName: "Name"| "Date" | "Client ID" | "Invoice ID";
  name: "name" | "date" | "pid" | "invoice_id";
}
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    NgIf,
    ButtonModule,
    SearchInvoiceTableComponent,
    ToastModule
  ],

  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private messageService: MessageService, private searchService: SearchApiService) {}

  fields: any;
  selectedField: Field | undefined;
  value: string | Date | number | undefined;
  invoices: InvoiceEntry[] = [];

  ngOnInit() {
    this.fields = [
      { displayName: 'Name', name: 'name' },
      { displayName: 'Date', name: 'date'},
      { displayName: 'Client ID', name: 'pid'},
      { displayName: 'Invoice ID', name: 'invoice_id'},
    ];
  }
  ngOnChanges() {
    console.log('onChanges');
  }
  search() {
    if (!this.selectedField || !this.value ) {
      this.messageService.add({severity:'error', summary:'Error', detail:'Please select a field and enter a value to search'})

      return;
    }
    this.searchService.searchInvoices(this.selectedField.name, this.value).subscribe((data) => {
      if (data.result.length === 0) {
        this.messageService.add({severity:'warn', summary:'No Results', detail:'No results found for the search criteria'})
      }
      this.invoices = data.result;
    });
  }
}
