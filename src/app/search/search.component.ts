import { Component } from '@angular/core';
import { InvoicingSearchComponent } from '../invoicing-search/invoicing-search.component';
import { InvoicingViewComponent } from '../invoicing-view/invoicing-view.component';
import { InvoicingDialogComponent } from '../invoicing-dialog/invoicing-dialog.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    InvoicingSearchComponent,
    InvoicingViewComponent,
    InvoicingDialogComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
