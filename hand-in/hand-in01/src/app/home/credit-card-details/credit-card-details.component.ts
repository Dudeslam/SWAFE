import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreditCard } from 'src/app/Models/credit-card';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { Transaction } from 'src/app/Models/transaction';
import { TransactionService } from 'src/app/transaction/transaction.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {

  creditCard: CreditCard;

  transactions: Transaction[];

  cardNumber: string;
  
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
    this.transactions.
  }
}



