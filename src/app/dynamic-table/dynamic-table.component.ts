import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [TableModule, NgFor],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent {
  @Input() data: any[] = [];
  @Input() columns: {
    field: string;
    header: string;
  }[] = [];
};


