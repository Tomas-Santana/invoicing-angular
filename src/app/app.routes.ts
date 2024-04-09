import { Routes } from '@angular/router';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, title: 'Dashboard'},
    { path: 'new', component: InvoicingComponent, title: 'New Invoice'},
    { path: 'search', component: SearchComponent, title: 'Search'},
];
