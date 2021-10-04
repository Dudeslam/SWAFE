import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditCardAddComponent } from './credit-card/credit-card-add/credit-card-add.component';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';
import { CreditCardDetailsComponent } from './home/credit-card-details/credit-card-details.component';
import { CreditCard } from './Models/credit-card';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'AddCards',
    component: CreditCardAddComponent,
  },
  {
    path: 'Transact',
    component: TransactionOverviewComponent
  },
  {
    path: 'details',
    component: CreditCardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
