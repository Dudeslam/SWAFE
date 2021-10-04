import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../Models/credit-card';
import { Transaction } from '../Models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  activeTransaction: Transaction;

  baseUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) { }

  get(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}`);
  }

  post(transaction: Transaction) {
    return this.http.post<Transaction>(`${this.baseUrl}`, transaction);
  }

  setActive(transaction: Transaction) {
    this.activeTransaction = transaction;
  }

  getActive(): Transaction {
    return this.activeTransaction;
  }
}