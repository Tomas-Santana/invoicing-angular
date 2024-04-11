import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceEntry, FullInvoice } from './Interfaces.interface';

type SearchResponse = {
  result: InvoiceEntry[];
}
type GetInvoiceResponse = {
  result: FullInvoice;
}

type VoidInvoiceResponse = {
  result: {
    message: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  apiURL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  searchInvoices(field: string, value: string | number | Date): Observable<SearchResponse> {
    if (typeof value === 'number') {
      value = value.toString();
    } else if (value instanceof Date) {
      value = value.toISOString().split('T')[0];
    }
    const body = {
      field: field,
      value: value
    }
    return this.http.post<SearchResponse>(`${this.apiURL}/searchInvoice`, body)

  }

  getInvoice(id: number): Observable<GetInvoiceResponse> {
    return this.http.post<GetInvoiceResponse>(`${this.apiURL}/getInvoice`, { invoice_id: id })
  }

  voidInvoice(id: number): Observable<VoidInvoiceResponse> {
    return this.http.post<VoidInvoiceResponse>(`${this.apiURL}/voidInvoice`, { invoice_id: id })
  }
}
