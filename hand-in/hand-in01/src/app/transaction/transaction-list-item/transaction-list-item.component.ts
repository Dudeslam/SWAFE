import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CreditCard } from 'src/app/Models/credit-card';
import { Transaction } from 'src/app/Models/transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {
  
  @Input() transaction: Transaction;

  @Output() deleteEvent = new EventEmitter();

  creditCard: CreditCard;

  constructor(
    private transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
    this.creditCard = this.transaction.credit_card;
  }

  removeTransaction(){
    this.transactionService.remove(this.transaction).subscribe(() => this.onSuccess());
  }

  onSuccess(){
    this.deleteEvent.emit();
  }
}
