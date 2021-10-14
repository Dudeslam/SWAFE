import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss']
})
export class CreditCardAddComponent implements OnInit {

  creditCardForm: FormGroup;

  get numberControl() : FormControl{
    return this.creditCardForm.get('card_number') as FormControl;
  }

  get cscCodeControl() : FormControl{
    return this.creditCardForm.get('csc_code') as FormControl;
  }

  get nameControl() : FormControl {
    return this.creditCardForm.get('name') as FormControl;
  }

  get monthControl() : FormControl {
    return this.creditCardForm.get('expiration_month') as FormControl;
  }

  get yearControl() : FormControl {
    return this.creditCardForm.get('expiration_year') as FormControl;
  }

  get issuerControl() : FormControl {
    return this.creditCardForm.get('issuer') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditCardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.creditCardForm = this.initForm();
  }

  OnSubmit(){
    this.creditCardService.post({
      cardholder_name: this.nameControl.value,
      card_number: this.numberControl.value,
      csc_code: this.cscCodeControl.value,
      expiration_date_month: this.monthControl.value,
      expiration_date_year: this.yearControl.value + 2000,
      issuer: this.issuerControl.value
    }).subscribe(() => this.onSuccess())
  }

  private onSuccess(){
    alert('great succcess!');
    this.creditCardForm.reset();
    this.router.navigate(['home']);
  }

  private initForm(): FormGroup{
    return this.fb.group({
      card_number: [null, [Validators.required, Validators.min(1000000), Validators.max(9999999999999999)]],
      csc_code: [100, [Validators.required, Validators.min(100), Validators.max(999)]],
      name: ['', Validators.required],
      expiration_month: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
      expiration_year: [1, [Validators.required, Validators.min(1), Validators.max(31)]],
      issuer: ['bob', Validators.required]
    })
  }

}