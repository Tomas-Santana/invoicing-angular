import { Component, HostListener, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

const routes = [
  { path: '/', title: 'Dashboard' },
  { path: '/new', title: 'Invoicing'},
  { path: '/search', title: 'Search'},
];

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarModule, ButtonModule,DialogModule, NgFor, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarVisible: boolean = false;
  dialogVisible: boolean = false;
  routes = routes;

  @HostListener('window:keydown.control.alt.s', ['$event'])
  openSidebar(event: KeyboardEvent) {
    this.sidebarVisible = !this.sidebarVisible;
  }
  @HostListener('window:keydown.control.alt.h', ['$event'])
  openDialog(event: KeyboardEvent) {
    this.dialogVisible = !this.dialogVisible;
  }
  
}
