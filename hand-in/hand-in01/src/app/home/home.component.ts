import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreditCard } from '../Models/credit-card';
import { CreditCardService } from '../credit-card/credit-card.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  creditCards$: Observable<CreditCard[]>;

  constructor(private creditCardService: CreditCardService) { }
  

  ngOnInit(): void {
      this.creditCards$ = this.creditCardService.get();
  }

  ngOnDestroy(): void {
  }

}
