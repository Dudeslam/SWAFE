import { Injectable } from '@angular/core';
import { CreditCard } from '../Models/credit-card';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  private activeCreditCard: CreditCard;

  baseUrl = 'http://localhost:3000/credit_cards';

  constructor(private http: HttpClient) { }

  get(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.baseUrl}`);
  }

  post(creditCard: CreditCard) {
    return this.http.post<CreditCard>(`${this.baseUrl}`, creditCard);
  }

  setActive(creditCard: CreditCard) {
    this.activeCreditCard = creditCard;
  }

  getActive(): CreditCard {
    return this.activeCreditCard;
  }

  remove(creditCard: CreditCard){
    return this.http.delete<CreditCard>(`${this.baseUrl}/${creditCard.card_number}`);
  }
}