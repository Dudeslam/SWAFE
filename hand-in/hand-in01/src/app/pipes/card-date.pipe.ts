import { Pipe, PipeTransform } from '@angular/core';
import { CreditCard } from '../Models/credit-card';

@Pipe({
  name: 'cardDate'
})
export class CardDatePipe implements PipeTransform {

  transform(creditCard: CreditCard, ...args: unknown[]): string {
    let dateString = '';
    if(creditCard.expiration_date_month < 10){
      dateString += '0';
    }
    dateString += creditCard.expiration_date_month.toString();

    dateString += '/' + (creditCard.expiration_date_year - 2000).toString();
    return dateString;
  }

}
