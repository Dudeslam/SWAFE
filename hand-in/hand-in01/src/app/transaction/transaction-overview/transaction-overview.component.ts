import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { CreditCard } from 'src/app/Models/credit-card';
import { CURRENCIES, Transaction } from 'src/app/Models/transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss']
})
export class TransactionOverviewComponent implements OnInit {

  transactions: Observable<Transaction[]>;

  creditCards: Observable<CreditCard[]>

  transactionForm: FormGroup;

  currencies = CURRENCIES;

  get ListControl(): FormControl{
    return this.transactionForm.get('credit_card') as FormControl;
  }

  get AmountControl(): FormControl{
    return this.transactionForm.get('amount') as FormControl;
  }

  get CommentControl(): FormControl{
    return this.transactionForm.get('comment') as FormControl
  }

  get DateControl(): FormControl{
    return this.transactionForm.get('date') as FormControl
  }
  
  get CurrencyControl(): FormControl{
    return this.transactionForm.get('currency') as FormControl
  }

  constructor(
    private transactionService: TransactionService,
    private creditCardService: CreditCardService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.transactions = this.transactionService.get().pipe(map(d => {
      return d.sort((a,b) => a.credit_card.card_number - b.credit_card.card_number);
    }));

    this.creditCards = this.creditCardService.get();

    this.transactionForm = this.initForm();
  }

  filterByAmount(): void {
    this.transactions = this.transactionService.get().pipe(map(d => {
      return d.sort((a,b) => a.amount - b.amount);
    }))
  }

  private initForm(): FormGroup{
    return this.fb.group({
      credit_card: [null, Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
      comment: [''],
      date: [Date.now, Validators.required],
      currency: [this.currencies[0], Validators.required]
    })
  }

  OnSubmit(){

  }
}
