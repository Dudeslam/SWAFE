import { Injectable } from '@angular/core';
import { creditCard } from './credit-card';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  baseUrl = 'http://localhost:3000/credit_cards';

  constructor(private http: HttpClient) { }

  get(): Observable<creditCard[]> {
    return this.http.get<creditCard[]>(`${this.baseUrl}`);
  }

  post(creditCard: creditCard) {
    return this.http.post<creditCard>(`${this.baseUrl}`, creditCard);
  }
}