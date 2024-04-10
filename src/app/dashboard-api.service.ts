import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClosingStatement } from './Interfaces.interface';
import { Observable } from 'rxjs';

type ClosingStatementResponse = {
  result: ClosingStatement
}
type CloseResponse = {
  result: {
    message: string
    insert: boolean
  }
}

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  apiURL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getClosingStatement(date: string): Observable<ClosingStatementResponse> {
    return this.http.post<ClosingStatementResponse>(`${this.apiURL}/getClosingStatement`, { date: date })
  }

  closeRegister(): Observable<CloseResponse> {
    return this.http.post<CloseResponse>(`${this.apiURL}/close`, {})
  }
}
