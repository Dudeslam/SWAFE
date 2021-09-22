import { Component, OnInit } from '@angular/core';

export interface CreditCardDetails{
  cardNumber: number,
  cardHolder_name: string,
  csc_code: number,
  expiration_date_month: Date,
  expiration_date_year: Date,
  issuer: string
}


@Component({
  selector: 'app-credit-card-list-item',
  templateUrl: './credit-card-list-item.component.html',
  styleUrls: ['./credit-card-list-item.component.scss']
})
export class CreditCardListItemComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }

  
}
