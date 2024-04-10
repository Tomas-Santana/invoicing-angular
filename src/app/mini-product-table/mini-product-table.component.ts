import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MiniProductEntry } from '../Interfaces.interface';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-mini-product-table',
  standalone: true,
  imports: [TableModule, NgIf],
  templateUrl: './mini-product-table.component.html',
  styleUrl: './mini-product-table.component.scss'
})
export class MiniProductTableComponent {
  @Input() products: MiniProductEntry[] = [];
}
