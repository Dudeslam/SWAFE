import { Component, OnInit } from '@angular/core';
import { CreditCardDetails } from '../credit-card-list-item/credit-card-list-item.component';
export interface CreditCard
{
  CardNumber: number,
  cardHolder_name: string,
  issuer: string
}

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})

export class CreditCardListComponent implements OnInit {

  constructor() { };
  CreditCardsList : CreditCard[] = [
    {
      CardNumber: 4281239529143532,
      cardHolder_name: 'BarringTon Stud',
      issuer: "Dane'ish Bank"
    }
  ];

  ngOnInit(): void {
  }

}
