import { Pipe, PipeTransform } from '@angular/core';
import { CreditCard } from '../Models/credit-card';
import { Transaction } from '../Models/transaction';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value: Transaction[] | null, term: string) {
    if(!value){
      return [];
    }
    const keys = Object.keys(value[0].credit_card);

    if (!term){ 
      return value;
    }

    return value.filter((item) =>
      keys.some(key =>
        item.credit_card.hasOwnProperty(key) && new RegExp(term, 'gi').test((this.getKeyValue<keyof CreditCard, CreditCard>(key as keyof CreditCard)(item.credit_card))as string)
      ));

  }
  getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];
}