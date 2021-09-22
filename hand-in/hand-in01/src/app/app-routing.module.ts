import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CreditCardAddComponent } from './credit-card/credit-card-add/credit-card-add.component';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'NavBar',
    component: NavBarComponent
  },
  {
    path: 'AddCards',
    component: CreditCardAddComponent
  },
  {
    path: 'Transact',
    component: TransactionOverviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
