import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreditCard } from '../Models/credit-card';
import { CreditCardService } from '../credit-card/credit-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  

  creditCards: CreditCard[];
  constructor(private creditCardService: CreditCardService) { }
  

  ngOnInit(): void {
      this.creditCardService.get().subscribe((data) => this.creditCards = data);
    
  }

  ngOnDestroy(): void {
  }

}
