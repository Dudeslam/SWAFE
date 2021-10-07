import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ControlValueAccessor, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventEmitter } from 'stream';
import { creditCard } from '../credit-card';
@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss'],


})
export class CreditCardAddComponent implements OnInit {
  
  ListofCards: creditCard = {};
  @Output() Addition = new EventEmitter<any>();

  // public CardForm: FormGroup;
  // constructor(formBuild: FormBuilder) {
  //   this.CardForm = formBuild.group({
  //     card_number: [null, Validators.required],
  //     csc_code:[null, Validators.required],
  //     cardholder_name: [null, Validators.required],
  //     expiration_date_month: [null, Validators.required],
  //     expiration_date_year: [null, Validators.required],
  //     issuer: [null]
  //   })
  // }

  
  CardForm;


  constructor(private formBuilder: FormBuilder ){
    this.CardForm = this.formBuilder.group({
      card_number: [null, Validators.required],
      csc_code: [null, Validators.required],
      cardholder_name: [null, Validators.required],
      expiration_date_month: [null, Validators.required],
      expiration_date_year: [null, Validators.required],
      issuer: new FormControl(''),
    });
  }

  onReset()
  {

  }

  //This should add to credit card list
   onSubmit(){
    this.Addition.emit(this.ListofCards)
    console.warn(this.CardForm.value) //tester for now
   }

  ngOnInit() {

  }

}
