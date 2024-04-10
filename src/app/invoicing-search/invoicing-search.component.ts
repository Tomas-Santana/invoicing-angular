import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'invoicing-search',
  standalone: true,
  imports: [CalendarModule, InputTextModule],
  templateUrl: './invoicing-search.component.html',
  styleUrl: './invoicing-search.component.scss'
})
export class InvoicingSearchComponent {
  
}
