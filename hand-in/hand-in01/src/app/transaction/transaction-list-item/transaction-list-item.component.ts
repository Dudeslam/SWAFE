import { Component, Input, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/Models/credit-card';
import { Transaction } from 'src/app/Models/transaction';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {
  
  @Input() transaction: Transaction;

  creditCard: CreditCard;

  constructor() { }

  ngOnInit(): void {
    this.creditCard = this.transaction.credit_card;
  }

}
