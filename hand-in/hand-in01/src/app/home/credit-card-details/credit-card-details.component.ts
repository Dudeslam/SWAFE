import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {map } from 'rxjs/operators'
import { CreditCard } from 'src/app/Models/credit-card';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { Transaction } from 'src/app/Models/transaction';
import { TransactionService } from 'src/app/transaction/transaction.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit, OnDestroy {

  creditCard: CreditCard;

  transactions: Transaction[];

  cardNumber: string;

  subscriptions: Subscription = new Subscription();
  
  constructor(
    private creditCardService: CreditCardService,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.creditCard = this.creditCardService.getActive();
    if(this.creditCard)
    {
      const firstFour = this.creditCard.card_number.toString().substr(0,3);
      const secondFour = this.creditCard.card_number.toString().substr(3,4);
      const ThirdFour = this.creditCard.card_number.toString().substr(7,4);
      const lastFour = this.creditCard.card_number.toString().substr(11,4);
      this.cardNumber = firstFour + " " + secondFour + " " + ThirdFour + " " + lastFour;
    }
    this.subscriptions.add(
      this.transactionService.get().pipe(
        map((d) => {
          this.transactions = d.filter( x => x.credit_card.card_number === this.creditCard.card_number)
          const i = 0;
        })).subscribe());
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}



