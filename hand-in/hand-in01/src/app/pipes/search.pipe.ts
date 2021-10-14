import { Pipe, PipeTransform } from '@angular/core';
import { CreditCard } from '../Models/credit-card';
import { Transaction } from '../Models/transaction';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value: Transaction[], term: string) {

    const keys = Object.keys(value[0])

    if (!term) return value;
    return value.filter((item,index,arr) =>
      keys.some(key =>
        item.hasOwnProperty(key) && new RegExp(term, 'gi').test((this.getKeyValue<keyof Transaction, Transaction>(key as keyof Transaction)(item))as string)
      ));

  }
  getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];
}