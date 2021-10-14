import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from 'src/app/Models/credit-card';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';


@Component({
  selector: 'app-credit-card-list-item',
  templateUrl: './credit-card-list-item.component.html',
  styleUrls: ['./credit-card-list-item.component.scss']
})
export class CreditCardListItemComponent implements OnInit {

  @Input() creditCard: CreditCard;

  constructor(
    private router: Router,
    private creditCardService: CreditCardService
    ) { }

  ngOnInit(): void {
  }

  goToDetails() {
    this.creditCardService.setActive(this.creditCard);
    this.router.navigate(['details']);
  }

}
