import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from 'primeng/overlay';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'search-modal',
  standalone: true,
  imports: [InputTextModule, TableModule, ButtonModule, OverlayModule],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
})
export class SearchModalComponent {
  
}
