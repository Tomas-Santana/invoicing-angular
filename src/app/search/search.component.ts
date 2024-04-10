import { Component } from '@angular/core';
import { InvoicingSearchComponent } from '../invoicing-search/invoicing-search.component' 
import { InvoicingViewComponent } from '../invoicing-view/invoicing-view.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InvoicingSearchComponent, InvoicingViewComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  
}
