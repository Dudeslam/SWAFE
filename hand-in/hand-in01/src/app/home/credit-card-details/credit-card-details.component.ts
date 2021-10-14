import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {map } from 'rxjs/operators'
import { CreditCard } from 'src/app/Models/credit-card';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { Transaction } from 'src/app/Models/transaction';
import { TransactionService } from 'src/app/transaction/transaction.service';
import { Router } from '@angular/router';

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
    private router: Router,
    private creditCardService: CreditCardService,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.creditCard = this.creditCardService.getActive();
    if(this.creditCard)
    {
      const firstThree = this.creditCard.card_number.toString().substr(0,3);
      const secondFour = this.creditCard.card_number.toString().substr(3,4);
      const ThirdFour = this.creditCard.card_number.toString().substr(7,4);
      const lastFour = this.creditCard.card_number.toString().substr(11,4);
      this.cardNumber = firstThree + " " + secondFour + " " + ThirdFour + " " + lastFour;
    } else {
      this.router.navigate(['home']);
    }

    this.subscriptions.add(
      this.transactionService.get().pipe(
        map((d) => 
          this.transactions = d.filter( x => x.credit_card.card_number === this.creditCard.card_number)
        )).subscribe());
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  removeCard(){
    this.creditCardService.remove(this.creditCard).subscribe(()=> this.router.navigate(['home']));
  }
}



